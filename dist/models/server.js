"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import fileUpload from 'express-fileupload';
const config_1 = __importDefault(require("../db/config"));
const routes_1 = require("../routes");
// import cors from 'cors';
class Server {
    constructor() {
        // path for routes
        this.routePaths = {
            roles: "/api/roles",
            userRoles: "/api/userRoles",
            users: "/api/users",
            clients: "/api/clients",
            projects: "/api/projects",
            jobPositions: "/api/jobPositions",
            openings: "/api/openings",
            employees: "/api/employees",
            employeeOpenings: "/api/employeeOpenings",
            candidates: "/api/candidates",
            persons: "/api/persons",
            allocations: "/api/allocations",
            interviews: "/api/interviews",
            pipelines: "/api/pipelines",
            benches: "/api/benches",
            billings: "/api/billings",
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT;
        // DB
        this.databaseConnect();
        // middlewares
        this.middlewares();
        // routes
        this.routes();
    }
    databaseConnect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield (0, config_1.default)();
                console.log("DB connected");
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    middlewares() {
        // // CORS
        // this.app.use(cors());
        // Parsing body
        this.app.use(express_1.default.json());
        // this.app.use(fileUpload({
        //     useTempFiles : true,
        //     tempFileDir : '/tmp/',
        //     createParentPath: true
        // }));
    }
    routes() {
        //TODO: upload
        this.app.use(this.routePaths.roles, routes_1.routerRole);
        this.app.use(this.routePaths.userRoles, routes_1.routerUserRole);
        this.app.use(this.routePaths.users, routes_1.routerUser);
        this.app.use(this.routePaths.clients, routes_1.routerClient);
        this.app.use(this.routePaths.projects, routes_1.routerProject);
        this.app.use(this.routePaths.jobPositions, routes_1.routerJobPosition);
        this.app.use(this.routePaths.openings, routes_1.routerOpening);
        this.app.use(this.routePaths.employees, routes_1.routerEmployee);
        this.app.use(this.routePaths.employeeOpenings, routes_1.routerEmployeeOpening);
        this.app.use(this.routePaths.candidates, routes_1.routerCandidates);
        this.app.use(this.routePaths.persons, routes_1.routerPersons);
        this.app.use(this.routePaths.allocations, routes_1.routerAllocations);
        this.app.use(this.routePaths.interviews, routes_1.routerInterviews);
        this.app.use(this.routePaths.pipelines, routes_1.routerPipelines);
        this.app.use(this.routePaths.benches, routes_1.routerBenches);
        this.app.use(this.routePaths.billings, routes_1.routerBillings);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`This Server is running in port ${this.port}`);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map