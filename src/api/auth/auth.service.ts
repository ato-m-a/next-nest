import * as crypto from 'crypto';
import * as dotenv from 'dotenv';

import { Injectable } from '@nestjs/common';

import { SignInDto, SessionDto, AllowDto } from './auth.dto';
import { Auth, Allow } from './auth.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });


@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Auth) private AuthRepository: Repository<Auth>,
    @InjectRepository(Allow) private AllowRepository: Repository<Allow>
    ) {}

  /* 정보 Fetch */
  async Fetch(session: Record<string, any>): Promise<object> {
    const response = await this.AuthRepository.createQueryBuilder('auth')
        .leftJoinAndSelect('auth.IP', 'allow')
        .select([
          'auth.ID',
          'auth.ROLE',
          'auth.ALLOW',
          'auth.REGDATE',
          'allow'
        ])
        .where('auth.ID = :ID', { ID: session.auth.ID })
        .getOne();
    return response;
  }

  /* 로그인 */
  async SignIn(ip: string, SignInDto: SignInDto): Promise<SessionDto> {
    const response = await this.AuthRepository.createQueryBuilder('auth')
        .leftJoinAndSelect('auth.IP', 'allow')
        .where('auth.ID = :ID', { ID: SignInDto.id })
        .getOne();
    
    // 해당 ID 존재
    if (response) {
      const PW = crypto.createHmac(process.env.HASH, process.env.SECRET_KEY).update(SignInDto.pw).digest('hex');

      // PW 검증
      if (PW === response.PW) {
        // 프로덕션 환경 && 허용 IP 목록 설정 O 
        if (process.env.NODE_ENV === 'production' && response.ALLOW) {
          const IP = response.IP.map((item) => item.IP);
          
          if (IP.includes(ip) && ip !== process.env.SUPER_USER) {
            return { status: 403, data: false };
          }
        }

        delete response.PW;
        // 로그인 성공
        return { status: 201, data: response };
      } else {
        // 비밀번호 오류
        return { status: 401, data: false };  
      }
    // 해당 ID 없음
    } else {
      return { status: 404, data: false };
    }
  }

  /* 새 허용 IP 작성 */
  async createAllow(dataset: Allow): Promise<void> {
    await this.AllowRepository.createQueryBuilder()
      .insert()
      .into(Allow)
      .values(dataset)
      .execute();
  }

  /* 허용 IP 삭제 */
  async deleteAllow(ip: string, auth: Auth): Promise<void> {
    await this.AllowRepository.delete({ IP: ip, auth });
  }
}