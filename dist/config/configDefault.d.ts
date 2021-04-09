export declare const configServer: {
    type: string;
    host: string;
    port: number;
    username: string;
    database: string;
    password: string;
    synchronize: boolean;
    entities: string;
    autoLoadEntities: boolean;
};
export declare const configBasic: {
    port: number;
};
export declare const jwtConfig: {
    secret: string;
    expireTime: number;
    defaultStrategy: string;
};
