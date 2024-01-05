/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ClinicalTeamModel } from '../models/ClinicalTeamModel';
import type { CompletePasswordReset } from '../models/CompletePasswordReset';
import type { EmailVerificationModel } from '../models/EmailVerificationModel';
import type { InfantModel } from '../models/InfantModel';
import type { InfantUpdateModel } from '../models/InfantUpdateModel';
import type { LoginModel } from '../models/LoginModel';
import type { ResponseModel } from '../models/ResponseModel';
import type { UpdateUserModel } from '../models/UpdateUserModel';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UserService {

    /**
     * @returns ResponseModel Success
     * @throws ApiError
     */
    public static postApiUserAddClinicalTeam({
requestBody,
}: {
requestBody?: ClinicalTeamModel,
}): CancelablePromise<ResponseModel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/User/add-clinical-team',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @returns ResponseModel Success
     * @throws ApiError
     */
    public static postApiUserUpdateUser({
requestBody,
}: {
requestBody?: UpdateUserModel,
}): CancelablePromise<ResponseModel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/User/update-user',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @returns ResponseModel Success
     * @throws ApiError
     */
    public static postApiUserToggleActive({
isActive,
userId,
}: {
isActive?: boolean,
userId?: string,
}): CancelablePromise<ResponseModel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/User/toggle-active',
            query: {
                'isActive': isActive,
                'userId': userId,
            },
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @returns ResponseModel Success
     * @throws ApiError
     */
    public static postApiUserAddInfant({
requestBody,
}: {
requestBody?: InfantModel,
}): CancelablePromise<ResponseModel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/User/add-infant',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @returns ResponseModel Success
     * @throws ApiError
     */
    public static postApiUserConfirmEmail({
requestBody,
}: {
requestBody?: EmailVerificationModel,
}): CancelablePromise<ResponseModel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/User/confirm-email',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @returns ResponseModel Success
     * @throws ApiError
     */
    public static postApiUserCompleteReset({
requestBody,
}: {
requestBody?: CompletePasswordReset,
}): CancelablePromise<ResponseModel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/User/complete-reset',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @returns ResponseModel Success
     * @throws ApiError
     */
    public static postApiUserForgotPassword({
email,
}: {
email?: string,
}): CancelablePromise<ResponseModel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/User/forgot-password',
            query: {
                'email': email,
            },
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @returns ResponseModel Success
     * @throws ApiError
     */
    public static postApiUserLogin({
requestBody,
}: {
requestBody?: LoginModel,
}): CancelablePromise<ResponseModel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/User/login',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @returns ResponseModel Success
     * @throws ApiError
     */
    public static getApiUserListUsers({
role,
search,
}: {
role?: string,
search?: string,
}): CancelablePromise<ResponseModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/User/list-users',
            query: {
                'role': role,
                'search': search,
            },
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @returns ResponseModel Success
     * @throws ApiError
     */
    public static getApiUser({
id,
}: {
id: string,
}): CancelablePromise<ResponseModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/User/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @returns ResponseModel Success
     * @throws ApiError
     */
    public static getApiUserInfants({
search,
}: {
search?: string,
}): CancelablePromise<ResponseModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/User/infants',
            query: {
                'search': search,
            },
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @returns ResponseModel Success
     * @throws ApiError
     */
    public static postApiUserUpdateInfant({
requestBody,
}: {
requestBody?: InfantUpdateModel,
}): CancelablePromise<ResponseModel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/User/update-infant',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @returns ResponseModel Success
     * @throws ApiError
     */
    public static getApiUserInfants1({
id,
}: {
id: string,
}): CancelablePromise<ResponseModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/User/infants/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @returns ResponseModel Success
     * @throws ApiError
     */
    public static getApiUserDashboard(): CancelablePromise<ResponseModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/User/dashboard',
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

}
