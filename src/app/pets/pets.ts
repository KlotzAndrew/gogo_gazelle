import * as _ from "lodash"

import { dogs } from "@libs/dogs"
import { utilmsg } from "~/utils/utils";
import { food } from "../food";

export function pets() {
    return [dogs, food, utilmsg, _.reverse(["pets", "are", "great"])].join(",");
}