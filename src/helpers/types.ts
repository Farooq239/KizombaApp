export type SignUpNew = {
  email: string;
  password: string;
};
export interface SignUpNewPayload {
  email: string;
  password: string;
  hasAcceptedTerms: boolean;
}
export type VerifyEmail = {
  email: string;
  verificationCode: string;
};
export type TRefreshToken = {
  refreshToken: string;
};
