export const DEFAULT_CUBE =
  "bbbbbbbbbrrrrrrrrrgggggggggoooooooooyyyyyyyyywwwwwwwww";
export const VALID_ROTATIONS = "FfRrBbLlUuDd";

export const CUBE_API_BASE = "https://timsonau.pythonanywhere.com";
export const SOLVE_SERVER_PATH = "/rubik/solve";
export const ROTATE_SERVER_PATH = "/rubik/rotate";

/*  Mapping of cube element positions to mnemonic names
  Each mnemonic is a three-character pattern, frc, where
       f indicates the face and is one of F, R, B, L, U, D
       r indicates the row and is one of T, M, B (for top, middle, bottom, respectively)
       c indicates the column and is one of L, M, R (for left, middle, right, repectively)
  The regex for the pattern is r'[FRBLUD][TMB][LMR]'*/

//Front face
export const FTL = 0;
export const FTM = 1;
export const FTR = 2;
export const FML = 3;
export const FMM = 4;
export const FMR = 5;
export const FBL = 6;
export const FBM = 7;
export const FBR = 8;

//Right face
export const RTL = 9;
export const RTM = 10;
export const RTR = 11;
export const RML = 12;
export const RMM = 13;
export const RMR = 14;
export const RBL = 15;
export const RBM = 16;
export const RBR = 17;

//Back face
export const BTL = 18;
export const BTM = 19;
export const BTR = 20;
export const BML = 21;
export const BMM = 22;
export const BMR = 23;
export const BBL = 24;
export const BBM = 25;
export const BBR = 26;

//Left face
export const LTL = 27;
export const LTM = 28;
export const LTR = 29;
export const LML = 30;
export const LMM = 31;
export const LMR = 32;
export const LBL = 33;
export const LBM = 34;
export const LBR = 35;

//Up face
export const UTL = 36;
export const UTM = 37;
export const UTR = 38;
export const UML = 39;
export const UMM = 40;
export const UMR = 41;
export const UBL = 42;
export const UBM = 43;
export const UBR = 44;

//Down face
export const DTL = 45;
export const DTM = 46;
export const DTR = 47;
export const DML = 48;
export const DMM = 49;
export const DMR = 50;
export const DBL = 51;
export const DBM = 52;
export const DBR = 53;
