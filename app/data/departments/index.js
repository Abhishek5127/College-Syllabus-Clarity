export { departmentSummaries } from "./summary";

const departmentLoaders = {
  bca: () => import("./bca").then((module) => module.department),
  ba: () => import("./ba").then((module) => module.department),
  bsc: () => import("./bsc").then((module) => module.department),
  bed: () => import("./bed").then((module) => module.department),
};

export const getDepartment = async (departmentId) => {
  const loader = departmentLoaders[departmentId];
  if (!loader) {
    return null;
  }
  return loader();
};
