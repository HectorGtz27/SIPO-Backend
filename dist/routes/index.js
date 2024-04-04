"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerBillings = exports.routerBenches = exports.routerPipelines = exports.routerInterviews = exports.routerAllocations = exports.routerPersons = exports.routerCandidates = exports.routerEmployeeOpening = exports.routerUserRole = exports.routerRole = exports.routerEmployee = exports.routerOpening = exports.routerJobPosition = exports.routerProject = exports.routerClient = exports.routerUser = void 0;
const users_1 = __importDefault(require("./users"));
exports.routerUser = users_1.default;
const clients_1 = __importDefault(require("./clients"));
exports.routerClient = clients_1.default;
const projects_js_1 = __importDefault(require("./projects.js"));
exports.routerProject = projects_js_1.default;
const jobPosition_1 = __importDefault(require("./jobPosition"));
exports.routerJobPosition = jobPosition_1.default;
const openings_js_1 = __importDefault(require("./openings.js"));
exports.routerOpening = openings_js_1.default;
const employees_1 = __importDefault(require("./employees"));
exports.routerEmployee = employees_1.default;
const roles_1 = __importDefault(require("./roles"));
exports.routerRole = roles_1.default;
const userRoles_1 = __importDefault(require("./userRoles"));
exports.routerUserRole = userRoles_1.default;
const employeeOpenings_1 = __importDefault(require("./employeeOpenings"));
exports.routerEmployeeOpening = employeeOpenings_1.default;
const candidates_1 = __importDefault(require("./candidates"));
exports.routerCandidates = candidates_1.default;
const persons_1 = __importDefault(require("./persons"));
exports.routerPersons = persons_1.default;
const allocations_1 = __importDefault(require("./allocations"));
exports.routerAllocations = allocations_1.default;
const interviews_1 = __importDefault(require("./interviews"));
exports.routerInterviews = interviews_1.default;
const pipelines_1 = __importDefault(require("./pipelines"));
exports.routerPipelines = pipelines_1.default;
const benches_1 = __importDefault(require("./benches"));
exports.routerBenches = benches_1.default;
const billings_1 = __importDefault(require("./billings"));
exports.routerBillings = billings_1.default;
//# sourceMappingURL=index.js.map