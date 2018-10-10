
export function isString(object: any, config: any): boolean;
export function isNumber(object: any, config: any): boolean;
export function isBoolean(object: any): boolean;
export function isUrl(object: any, config: any): boolean;
export function isEmail(object: any, config: any): boolean;
export function isArray(object: any, config: any): boolean;
export function objectValidator(properties: any): (object: any)=>boolean;
export function stringValidator(isRequired: boolean, config: any): any;
export function numberValidator(isRequired: boolean, config: any): any;
export function booleanValidator(isRequired: boolean, config: any): any;
export function urlValidator(isRequired: boolean, config: any): any;
export function emailValidator(isRequired: boolean, config: any): any;
export function arrayValidator(isRequired: boolean, config: any): any;
export function customValidator(isRequired: boolean, isValid: any, config: any): any;
export function bundleWithConfig(validator: any, config: any): any;
