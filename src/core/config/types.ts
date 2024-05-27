import { AuthResponse } from '#/auth/types';

export enum ConfigAuthMode {
  Redirect = 'redirect',
  InNewTab = 'new_tab'
}

/**
 * Если передан codeVerifier, то нельзя передать codeChallenge и наоборот
 * При этом оба параметра необязательные
 */
export type PKSE = (
  | { codeVerifier?: string; codeChallenge?: never }
  | { codeVerifier?: never; codeChallenge: string }
  );

/**
 * Работает только с OneTap и FloatingOneTap при условии, что пользователь
 * уже авторизирован в VK
 */
export type AuthCallback = (response: AuthResponse) => boolean | void;

export interface ConfigData {
  app: number;
  redirectUrl: string;
  state?: string;
  codeVerifier?: string;
  codeChallenge?: string;
  scope?: string;
  onAuth?: AuthCallback;

  /**
   * @ignore
   */
  prompt?: Prompt[];

  /**
   * @ignore
   */
  mode?: ConfigAuthMode;

  /**
   * @ignore
   */
  __loginDomain?: string;

  /**
   * @ignore
   */
  __oauthDomain?: string;

  /**
   * @ignore
   */
  __vkidDomain?: string;

  /**
   * @ignore
   */
  __localhost?: boolean;

  /**
   * @ignore
   */
  __debug?: boolean;
}

export enum Prompt {
  Default = '',
  None = 'none',
  Login = 'login',
  Consent = 'consent',
  SelectAccount = 'select_account',
}
