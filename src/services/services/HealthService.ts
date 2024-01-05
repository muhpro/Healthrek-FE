/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GrowthModel } from '../models/GrowthModel';
import type { ImmunizationModel } from '../models/ImmunizationModel';
import type { MedicalVisitModel } from '../models/MedicalVisitModel';
import type { ResponseModel } from '../models/ResponseModel';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class HealthService {

    /**
     * @returns ResponseModel Success
     * @throws ApiError
     */
    public static postApiHealthConsultationAddVisitationDetail({
requestBody,
}: {
requestBody?: MedicalVisitModel,
}): CancelablePromise<ResponseModel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Health/consultation/add-visitation-detail',
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
    public static postApiHealthConsultationUpdateVisitationDetail({
requestBody,
}: {
requestBody?: MedicalVisitModel,
}): CancelablePromise<ResponseModel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Health/consultation/update-visitation-detail',
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
    public static postApiHealthConsultationDeleteMedicalHistory({
id,
}: {
id: string,
}): CancelablePromise<ResponseModel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Health/consultation/delete-medical-history/{id}',
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
    public static getApiHealthConsultationMedicalHistory({
infantId,
}: {
infantId: string,
}): CancelablePromise<ResponseModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Health/consultation/medical-history/{infantId}',
            path: {
                'infantId': infantId,
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
    public static postApiHealthGrowthAddGrowthRecord({
requestBody,
}: {
requestBody?: GrowthModel,
}): CancelablePromise<ResponseModel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Health/growth/add-growth-record',
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
    public static postApiHealthGrowthUpdate({
requestBody,
}: {
requestBody?: GrowthModel,
}): CancelablePromise<ResponseModel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Health/growth/update',
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
    public static postApiHealthGrowthDelete({
id,
}: {
id: string,
}): CancelablePromise<ResponseModel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Health/growth/delete/{id}',
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
    public static getApiHealthGrowthInfantGrowthRecord({
infantId,
}: {
infantId: string,
}): CancelablePromise<ResponseModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Health/growth/infant-growth-record/{infantId}',
            path: {
                'infantId': infantId,
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
    public static postApiHealthImmunizationAddImmunizationRecord({
requestBody,
}: {
requestBody?: ImmunizationModel,
}): CancelablePromise<ResponseModel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Health/immunization/add-immunization-record',
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
    public static postApiHealthImmunizationUpdateImmunizationRecord({
requestBody,
}: {
requestBody?: ImmunizationModel,
}): CancelablePromise<ResponseModel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Health/immunization/update-immunization-record',
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
    public static postApiHealthImmunizationDelete({
id,
}: {
id: string,
}): CancelablePromise<ResponseModel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Health/immunization/delete/{id}',
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
    public static getApiHealthImmunization({
infantId,
}: {
infantId: string,
}): CancelablePromise<ResponseModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Health/immunization/{infantId}',
            path: {
                'infantId': infantId,
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
    public static getApiHealthVaccines(): CancelablePromise<ResponseModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Health/vaccines',
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

}
