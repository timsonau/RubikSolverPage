import { CUBE_API_BASE, ROTATE_SERVER_PATH } from "./constants";

interface CubeData {
  cube: string;
  status: string;
}

export const fetchRotatedCube = async (cube: string, rotations: string) => {
  try {
    const response = await fetch(
      `${CUBE_API_BASE}${ROTATE_SERVER_PATH}?cube=${cube}&dir=${rotations}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error Fetching Cube:", error);
    return {};
  }
};
