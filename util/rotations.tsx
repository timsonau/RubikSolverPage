import * as c from "../util/constants";

export const rotate_F = (cube: string) => {
  let temp = cube.split("");

  // rotate the front face
  temp[c.FTR] = cube[c.FTL];
  temp[c.FMR] = cube[c.FTM];
  temp[c.FBR] = cube[c.FTR];
  temp[c.FTM] = cube[c.FML];
  temp[c.FMM] = cube[c.FMM];
  temp[c.FBM] = cube[c.FMR];
  temp[c.FTL] = cube[c.FBL];
  temp[c.FML] = cube[c.FBM];
  temp[c.FBL] = cube[c.FBR];

  //rotate up to right
  temp[c.RTL] = cube[c.UBL];
  temp[c.RML] = cube[c.UBM];
  temp[c.RBL] = cube[c.UBR];

  //rotate right to down
  temp[c.DTR] = cube[c.RTL];
  temp[c.DTM] = cube[c.RML];
  temp[c.DTL] = cube[c.RBL];

  //rotate bottom to left
  temp[c.LTR] = cube[c.DTL];
  temp[c.LMR] = cube[c.DTM];
  temp[c.LBR] = cube[c.DTR];

  // rotate left to up
  temp[c.UBR] = cube[c.LTR];
  temp[c.UBM] = cube[c.LMR];
  temp[c.UBL] = cube[c.LBR];
  return temp.join("");
};

export const rotate_f = (cube: string) => {
  let temp = cube.split("");

  //rotate the front face
  temp[c.FBL] = cube[c.FTL];
  temp[c.FML] = cube[c.FTM];
  temp[c.FTL] = cube[c.FTR];
  temp[c.FBM] = cube[c.FML];
  temp[c.FMM] = cube[c.FMM];
  temp[c.FTM] = cube[c.FMR];
  temp[c.FBR] = cube[c.FBL];
  temp[c.FMR] = cube[c.FBM];
  temp[c.FTR] = cube[c.FBR];

  //rotate up to left
  temp[c.LBR] = cube[c.UBL];
  temp[c.LMR] = cube[c.UBM];
  temp[c.LTR] = cube[c.UBR];

  //rotate right to up
  temp[c.UBL] = cube[c.RTL];
  temp[c.UBM] = cube[c.RML];
  temp[c.UBR] = cube[c.RBL];

  //rotate bottom to right
  temp[c.RBL] = cube[c.DTL];
  temp[c.RML] = cube[c.DTM];
  temp[c.RTL] = cube[c.DTR];

  //rotate left to down
  temp[c.DTL] = cube[c.LTR];
  temp[c.DTM] = cube[c.LMR];
  temp[c.DTR] = cube[c.LBR];
  return temp.join("");
};

export const rotate_R = (cube: string) => {
  let temp = cube.split("");

  //rotate the right face
  temp[c.RTR] = cube[c.RTL];
  temp[c.RMR] = cube[c.RTM];
  temp[c.RBR] = cube[c.RTR];
  temp[c.RTM] = cube[c.RML];
  temp[c.RMM] = cube[c.RMM];
  temp[c.RBM] = cube[c.RMR];
  temp[c.RTL] = cube[c.RBL];
  temp[c.RML] = cube[c.RBM];
  temp[c.RBL] = cube[c.RBR];

  //rotate up to back
  temp[c.BBL] = cube[c.UTR];
  temp[c.BML] = cube[c.UMR];
  temp[c.BTL] = cube[c.UBR];

  //rotate back to down
  temp[c.DBR] = cube[c.BTL];
  temp[c.DMR] = cube[c.BML];
  temp[c.DTR] = cube[c.BBL];

  //rotate down to front
  temp[c.FTR] = cube[c.DTR];
  temp[c.FMR] = cube[c.DMR];
  temp[c.FBR] = cube[c.DBR];

  //rotate front to up
  temp[c.UTR] = cube[c.FTR];
  temp[c.UMR] = cube[c.FMR];
  temp[c.UBR] = cube[c.FBR];
  return temp.join("");
};

export const rotate_r = (cube: string) => {
  let temp = cube.split("");

  // rotate the right face
  temp[c.RBL] = cube[c.RTL];
  temp[c.RML] = cube[c.RTM];
  temp[c.RTL] = cube[c.RTR];
  temp[c.RBM] = cube[c.RML];
  temp[c.RMM] = cube[c.RMM];
  temp[c.RTM] = cube[c.RMR];
  temp[c.RBR] = cube[c.RBL];
  temp[c.RMR] = cube[c.RBM];
  temp[c.RTR] = cube[c.RBR];

  // rotate up to front
  temp[c.FTR] = cube[c.UTR];
  temp[c.FMR] = cube[c.UMR];
  temp[c.FBR] = cube[c.UBR];

  // rotate front to down
  temp[c.DTR] = cube[c.FTR];
  temp[c.DMR] = cube[c.FMR];
  temp[c.DBR] = cube[c.FBR];

  // rotate down to back
  temp[c.BBL] = cube[c.DTR];
  temp[c.BML] = cube[c.DMR];
  temp[c.BTL] = cube[c.DBR];

  // rotate back to up
  temp[c.UBR] = cube[c.BTL];
  temp[c.UMR] = cube[c.BML];
  temp[c.UTR] = cube[c.BBL];
  return temp.join("");
};

export const rotate_B = (cube: string) => {
  let temp = cube.split("");
  // rotate the back face
  temp[c.BTR] = cube[c.BTL];
  temp[c.BMR] = cube[c.BTM];
  temp[c.BBR] = cube[c.BTR];
  temp[c.BTM] = cube[c.BML];
  temp[c.BMM] = cube[c.BMM];
  temp[c.BBM] = cube[c.BMR];
  temp[c.BTL] = cube[c.BBL];
  temp[c.BML] = cube[c.BBM];
  temp[c.BBL] = cube[c.BBR];
  // rotate up to left
  temp[c.LBL] = cube[c.UTL];
  temp[c.LML] = cube[c.UTM];
  temp[c.LTL] = cube[c.UTR];
  // rotate right to up
  temp[c.UTL] = cube[c.RTR];
  temp[c.UTM] = cube[c.RMR];
  temp[c.UTR] = cube[c.RBR];
  // rotate bottom to right
  temp[c.RBR] = cube[c.DBL];
  temp[c.RMR] = cube[c.DBM];
  temp[c.RTR] = cube[c.DBR];
  // rotate left to down
  temp[c.DBL] = cube[c.LTL];
  temp[c.DBM] = cube[c.LML];
  temp[c.DBR] = cube[c.LBL];
  return temp.join("");
};

export const rotate_b = (cube: string) => {
  let temp = cube.split("");

  // rotate the back face
  temp[c.BBL] = cube[c.BTL];
  temp[c.BML] = cube[c.BTM];
  temp[c.BTL] = cube[c.BTR];
  temp[c.BBM] = cube[c.BML];
  temp[c.BMM] = cube[c.BMM];
  temp[c.BTM] = cube[c.BMR];
  temp[c.BBR] = cube[c.BBL];
  temp[c.BMR] = cube[c.BBM];
  temp[c.BTR] = cube[c.BBR];

  // rotate up to right
  temp[c.RTR] = cube[c.UTL];
  temp[c.RMR] = cube[c.UTM];
  temp[c.RBR] = cube[c.UTR];

  // rotate right to down
  temp[c.DBR] = cube[c.RTR];
  temp[c.DBM] = cube[c.RMR];
  temp[c.DBL] = cube[c.RBR];

  // rotate down to right
  temp[c.LTL] = cube[c.DBL];
  temp[c.LML] = cube[c.DBM];
  temp[c.LBL] = cube[c.DBR];

  // rotate left to up
  temp[c.UTR] = cube[c.LTL];
  temp[c.UTM] = cube[c.LML];
  temp[c.UTL] = cube[c.LBL];
  return temp.join("");
};

export const rotate_L = (cube: string) => {
  let temp = cube.split("");

  // rotate the left face
  temp[c.LTR] = cube[c.LTL];
  temp[c.LMR] = cube[c.LTM];
  temp[c.LBR] = cube[c.LTR];
  temp[c.LTM] = cube[c.LML];
  temp[c.LMM] = cube[c.LMM];
  temp[c.LBM] = cube[c.LMR];
  temp[c.LTL] = cube[c.LBL];
  temp[c.LML] = cube[c.LBM];
  temp[c.LBL] = cube[c.LBR];

  // rotate up to front
  temp[c.FTL] = cube[c.UTL];
  temp[c.FML] = cube[c.UML];
  temp[c.FBL] = cube[c.UBL];

  // rotate front to down
  temp[c.DTL] = cube[c.FTL];
  temp[c.DML] = cube[c.FML];
  temp[c.DBL] = cube[c.FBL];

  // rotate down to back
  temp[c.BBR] = cube[c.DTL];
  temp[c.BMR] = cube[c.DML];
  temp[c.BTR] = cube[c.DBL];

  // rotate back to up
  temp[c.UBL] = cube[c.BTR];
  temp[c.UML] = cube[c.BMR];
  temp[c.UTL] = cube[c.BBR];

  return temp.join("");
};

export const rotate_l = (cube: string) => {
  let temp = cube.split("");

  // rotate the left face
  temp[c.LBL] = cube[c.LTL];
  temp[c.LML] = cube[c.LTM];
  temp[c.LTL] = cube[c.LTR];
  temp[c.LBM] = cube[c.LML];
  temp[c.LMM] = cube[c.LMM];
  temp[c.LTM] = cube[c.LMR];
  temp[c.LBR] = cube[c.LBL];
  temp[c.LMR] = cube[c.LBM];
  temp[c.LTR] = cube[c.LBR];

  // rotate up to back
  temp[c.BBR] = cube[c.UTL];
  temp[c.BMR] = cube[c.UML];
  temp[c.BTR] = cube[c.UBL];

  // rotate back to down
  temp[c.DBL] = cube[c.BTR];
  temp[c.DML] = cube[c.BMR];
  temp[c.DTL] = cube[c.BBR];

  // rotate down to front
  temp[c.FTL] = cube[c.DTL];
  temp[c.FML] = cube[c.DML];
  temp[c.FBL] = cube[c.DBL];

  // rotate front to up
  temp[c.UTL] = cube[c.FTL];
  temp[c.UML] = cube[c.FML];
  temp[c.UBL] = cube[c.FBL];

  return temp.join("");
};

export const rotate_U = (cube: string) => {
  let temp = cube.split("");
  // rotate the up face
  temp[c.UTR] = cube[c.UTL];
  temp[c.UMR] = cube[c.UTM];
  temp[c.UBR] = cube[c.UTR];
  temp[c.UTM] = cube[c.UML];
  temp[c.UMM] = cube[c.UMM];
  temp[c.UBM] = cube[c.UMR];
  temp[c.UTL] = cube[c.UBL];
  temp[c.UML] = cube[c.UBM];
  temp[c.UBL] = cube[c.UBR];
  // rotate front to left
  temp[c.LTL] = cube[c.FTL];
  temp[c.LTM] = cube[c.FTM];
  temp[c.LTR] = cube[c.FTR];
  // rotate left to back
  temp[c.BTL] = cube[c.LTL];
  temp[c.BTM] = cube[c.LTM];
  temp[c.BTR] = cube[c.LTR];
  // rotate back to right
  temp[c.RTL] = cube[c.BTL];
  temp[c.RTM] = cube[c.BTM];
  temp[c.RTR] = cube[c.BTR];
  // rotate right to front
  temp[c.FTL] = cube[c.RTL];
  temp[c.FTM] = cube[c.RTM];
  temp[c.FTR] = cube[c.RTR];

  return temp.join("");
};

export const rotate_u = (cube: string) => {
  let temp = cube.split("");

  // rotate the up face
  temp[c.UBL] = cube[c.UTL];
  temp[c.UML] = cube[c.UTM];
  temp[c.UTL] = cube[c.UTR];
  temp[c.UBM] = cube[c.UML];
  temp[c.UMM] = cube[c.UMM];
  temp[c.UTM] = cube[c.UMR];
  temp[c.UBR] = cube[c.UBL];
  temp[c.UMR] = cube[c.UBM];
  temp[c.UTR] = cube[c.UBR];

  // rotate front to right
  temp[c.RTL] = cube[c.FTL];
  temp[c.RTM] = cube[c.FTM];
  temp[c.RTR] = cube[c.FTR];

  // rotate right to back
  temp[c.BTL] = cube[c.RTL];
  temp[c.BTM] = cube[c.RTM];
  temp[c.BTR] = cube[c.RTR];

  // rotate back to left
  temp[c.LTL] = cube[c.BTL];
  temp[c.LTM] = cube[c.BTM];
  temp[c.LTR] = cube[c.BTR];

  // rotate left to front
  temp[c.FTL] = cube[c.LTL];
  temp[c.FTM] = cube[c.LTM];
  temp[c.FTR] = cube[c.LTR];
  return temp.join("");
};
