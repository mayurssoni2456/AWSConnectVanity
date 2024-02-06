import { mapper } from "../shared/mapper";
import { createMap } from "@automapper/core";
import { VanifyEntity } from "./VanifyEntity";
import { VanifyDTO } from "./VanifyDTO";

createMap(mapper, VanifyEntity, VanifyDTO);

export { VanifyEntity, VanifyDTO };