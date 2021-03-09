/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import { CommonEndSessionRequest } from "@azure/msal-common";

/**
 * EndSessionRequest
 * - account                - Account object that will be logged out of. All tokens tied to this account will be cleared.
 * - postLogoutRedirectUri  - URI to navigate to after logout page.
 * - authority              - Authority to send logout request to.
 * - correlationId          - Unique GUID set per request to trace a request end-to-end for telemetry purposes.
 * - idTokenHint            - ID Token used by B2C to validate logout if required by the policy
 * - onRedirectNavigate     - Callback that will be passed the url that MSAL will navigate to. Returning false in the callback will stop navigation.
 */
export type EndSessionPopupRequest = Partial<CommonEndSessionRequest> & {
    authority?: string;
    redirectMainWindowTo?: string;
};
