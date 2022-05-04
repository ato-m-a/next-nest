import * as crypto from 'crypto';
import * as dotenv from 'dotenv';
import { getClientIp } from 'request-ip';

import db from '../modules/db';
import params from '../modules/params';

import { Request } from 'express';
import { Injectable } from '@nestjs/common';

import { SignInDto, SessionDto } from './auth.dto';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });


@Injectable()
export class AuthService {
  /* 로그인 */
  async SignIn(req: Request, dataset: SignInDto): Promise<SessionDto> {
    const queryParam = params.authParam(req.get('host'));

    try {
      const response = await db.client.query(queryParam).promise();

      if (response.Items[0]) {
        const auth = response.Items[0][dataset.id];

        if (!auth) {
          return { status: 404, data: false };
        } else {
          const pw = crypto.createHmac(process.env.HASH, process.env.SECRET_KEY).update(dataset.pw).digest('hex');

          if (pw !== auth.pw) {
            return { status: 401, data: false };
          } else {
            // production 환경에서 IP 검증
            if (process.env.NODE_ENV === 'production') {
              // 허용 IP 설정을 했을 때
              if (auth.allow.length !== 0) {
                // 항목에 요청한 IP가 없을 때
                if (!auth.allow.includes(getClientIp(req))) {
                  // 슈퍼유저가 아니면
                  if (getClientIp(req) !== process.env.SUPER_USER) {
                    return { status: 403, data: false };
                  }
                }
              }
            }

            delete auth.pw;

            return { status: 200, data: auth };
          }
        }

      } else {
        return { status: 404, data: false }
      }
    } catch (e: any) {
      return { status: 500, data: false };
    }
  }
}