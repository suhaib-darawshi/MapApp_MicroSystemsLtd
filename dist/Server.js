"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const tslib_1 = require("tslib");
const path_1 = require("path");
const di_1 = require("@tsed/di");
const common_1 = require("@tsed/common");
require("@tsed/platform-express");
require("@tsed/ajv");
require("@tsed/swagger");
const index_1 = require("./config/index");
const rest = tslib_1.__importStar(require("./controllers/rest/index"));
const pages = tslib_1.__importStar(require("./controllers/pages/index"));
const MariadbDatasource_1 = require("./datasources/MariadbDatasource");
const CustomSocketService_1 = require("./services/CustomSocketService");
let Server = class Server {
    app;
    settings;
};
exports.Server = Server;
tslib_1.__decorate([
    (0, di_1.Inject)(),
    tslib_1.__metadata("design:type", common_1.PlatformApplication)
], Server.prototype, "app", void 0);
tslib_1.__decorate([
    (0, di_1.Configuration)(),
    tslib_1.__metadata("design:type", Object)
], Server.prototype, "settings", void 0);
exports.Server = Server = tslib_1.__decorate([
    (0, di_1.Configuration)({
        ...index_1.config,
        acceptMimes: ["application/json"],
        httpPort: parseInt(process.env.PORT ?? "8083"),
        httpsPort: false,
        disableComponentsScan: true,
        typeorm: {
            dataSource: MariadbDatasource_1.MariadbDataSource,
        },
        mount: {
            "/rest": [
                ...Object.values(rest)
            ],
            "/": [
                ...Object.values(pages)
            ],
            "/socket": [CustomSocketService_1.CustomSocketService]
        },
        swagger: [
            {
                path: "/doc",
                specVersion: "3.0.1"
            }
        ],
        middlewares: [
            "cors",
            "cookie-parser",
            "compression",
            "method-override",
            "json-parser",
            { use: "urlencoded-parser", options: { extended: true } }
        ],
        views: {
            root: (0, path_1.join)(process.cwd(), "../views"),
            extensions: {
                ejs: "ejs"
            }
        },
        exclude: [
            "**/*.spec.ts"
        ]
    })
], Server);
//# sourceMappingURL=Server.js.map