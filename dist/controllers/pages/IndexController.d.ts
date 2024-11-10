export declare class IndexController {
    private swagger;
    get(protocol: string, host: string): {
        BASE_URL: string;
        docs: ({
            specVersion?: import("@tsed/openspec").OS2Versions;
            spec?: Partial<import("@tsed/openspec").OpenSpec2>;
            path: string;
            fileName?: string;
            hidden?: string;
            doc?: string;
            cssPath?: string;
            jsPath?: string;
            viewPath?: string | false;
            options?: import("@tsed/swagger").SwaggerUIOptions;
            showExplorer?: boolean;
            specPath?: string;
            outFile?: string;
            sortPaths?: boolean;
            operationIdFormatter?: (name: string, propertyKey: string, path: string) => string;
            operationIdPattern?: string;
            disableSpec?: boolean;
            pathPatterns?: string[];
            url: string;
        } | {
            specVersion?: import("@tsed/openspec").OS3Versions;
            spec?: Partial<import("@tsed/openspec").OpenSpec3>;
            path: string;
            fileName?: string;
            hidden?: string;
            doc?: string;
            cssPath?: string;
            jsPath?: string;
            viewPath?: string | false;
            options?: import("@tsed/swagger").SwaggerUIOptions;
            showExplorer?: boolean;
            specPath?: string;
            outFile?: string;
            sortPaths?: boolean;
            operationIdFormatter?: (name: string, propertyKey: string, path: string) => string;
            operationIdPattern?: string;
            disableSpec?: boolean;
            pathPatterns?: string[];
            url: string;
        })[];
    };
}
