import { IsString, IsObject, IsNumber, IsNotEmpty, ValidateNested, IsBoolean } from 'class-validator';
import { Type } from 'class-transformer';

/* tel */
class Tel {
  tel: string;
  src: string;
  activate: boolean;
}

/* index */
class Index {
  type: string;
  src: string;
}

/* footer */
class Footer {
  src: string;
  background: string;
  fontSize: string;
  borderColor: string;
  borderPx: number;
  border: string[];
  text_PC: string;
  text_Mobile: string;
}

/* home */
class Home {
  src: string;
  activate: boolean;
}

/* shortcut */
class ShortCut {
  src: string;
  path: string;
  activate: boolean;
}

/* to server */
export class UpdateDto {
  @IsNotEmpty()
  @IsString()
  readonly favicon: string;

  @IsNotEmpty()
  @IsString()
  readonly title: string;

  @IsNotEmpty()
  @IsObject()
  readonly tel: Tel;

  @IsNotEmpty()
  @IsObject()
  readonly index: Index;

  @IsNotEmpty()
  @IsObject()
  readonly footer: Footer;

  @IsNotEmpty()
  @IsObject()
  readonly home: Home;

  @IsNotEmpty()
  @IsObject()
  readonly shortcut: ShortCut;
}

/* to DB */
export class CreateDto {
  @IsNotEmpty()
  @IsString()
  readonly AUTHOR: string;

  @IsNotEmpty()
  @IsString()
  readonly FAVICON: string;

  @IsNotEmpty()
  @IsString()
  readonly TITLE: string;

  @IsNotEmpty()
  @IsString()
  readonly TEL: string;

  @IsNotEmpty()
  @IsString()
  readonly TEL_SRC: string;

  @IsNotEmpty()
  @IsBoolean()
  readonly TEL_ACTIVATE: boolean;

  @IsNotEmpty()
  @IsString()
  readonly INDEX_TYPE: string;

  @IsNotEmpty()
  @IsString()
  readonly INDEX_SRC: string;

  @IsNotEmpty()
  @IsString()
  readonly FOOTER_SRC: string;

  @IsNotEmpty()
  @IsString()
  readonly FOOTER_BACKGROUND: string;

  @IsNotEmpty()
  @IsString()
  readonly FOOTER_BORDER: string;

  @IsNotEmpty()
  @IsNumber()
  readonly FOOTER_PX: number;

  @IsNotEmpty()
  @IsBoolean()
  readonly FOOTER_BORDER_TOP: boolean;

  @IsNotEmpty()
  @IsBoolean()
  readonly FOOTER_BORDER_RIGHT: boolean;

  @IsNotEmpty()
  @IsBoolean()
  readonly FOOTER_BORDER_BOTTOM: boolean;

  @IsNotEmpty()
  @IsBoolean()
  readonly FOOTER_BORDER_LEFT: boolean;

  @IsNotEmpty()
  @IsString()
  readonly FOOTER_TEXT_PC: string;

  @IsNotEmpty()
  @IsString()
  readonly FOOTER_TEXT_MOBILE: string;

  @IsNotEmpty()
  @IsString()
  readonly HOME_LOGO_SRC: string;

  @IsNotEmpty()
  @IsBoolean()
  readonly HOME_LOGO_ACTIVATE: boolean;

  @IsNotEmpty()
  @IsString()
  readonly SHORTCUT_SRC: string;

  @IsNotEmpty()
  @IsString()
  readonly SHORTCUT_PATH: string;

  @IsNotEmpty()
  @IsBoolean()
  readonly SHORTCUT_ACTIVATE: boolean;
}