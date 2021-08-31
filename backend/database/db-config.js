import knex from "knex";

const environment = process.env.NODE_ENV || "development";
import config from "../knexfile.js";

export default knex(config[environment]);
