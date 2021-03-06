/* tslint:disable */
/* eslint-disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.6.2.0 (NJsonSchema v10.1.23.0 (Newtonsoft.Json v12.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming

export class ContactClient {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        this.http = http ? http : <any>window;
        this.baseUrl = baseUrl ? baseUrl : "";
    }

    /**
     * @param userId (optional) 
     * @param pageNumber (optional) 
     * @param pageSize (optional) 
     * @return Success
     */
    getContacts(userId: number | undefined, pageNumber: number | undefined, pageSize: number | undefined): Promise<ContactPage> {
        let url_ = this.baseUrl + "/api/contact?";
        if (userId === null)
            throw new Error("The parameter 'userId' cannot be null.");
        else if (userId !== undefined)
            url_ += "userId=" + encodeURIComponent("" + userId) + "&";
        if (pageNumber === null)
            throw new Error("The parameter 'pageNumber' cannot be null.");
        else if (pageNumber !== undefined)
            url_ += "pageNumber=" + encodeURIComponent("" + pageNumber) + "&";
        if (pageSize === null)
            throw new Error("The parameter 'pageSize' cannot be null.");
        else if (pageSize !== undefined)
            url_ += "pageSize=" + encodeURIComponent("" + pageSize) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "GET",
            headers: {
                "Accept": "text/plain"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetContacts(_response);
        });
    }

    protected processGetContacts(response: Response): Promise<ContactPage> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = ContactPage.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<ContactPage>(<any>null);
    }

    /**
     * @param id (optional) 
     * @param firstName (optional) 
     * @param lastName (optional) 
     * @param phone (optional) 
     * @param email (optional) 
     * @param street (optional) 
     * @param city (optional) 
     * @param state (optional) 
     * @param zipCode (optional) 
     * @param userId (optional) 
     * @param isActive (optional) 
     * @return Success
     */
    createContact(id: number | undefined, firstName: string | null | undefined, lastName: string | null | undefined, phone: string | null | undefined, email: string | null | undefined, street: string | null | undefined, city: string | null | undefined, state: string | null | undefined, zipCode: string | null | undefined, userId: number | undefined, isActive: boolean | undefined): Promise<Contact> {
        let url_ = this.baseUrl + "/api/contact?";
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "Id=" + encodeURIComponent("" + id) + "&";
        if (firstName !== undefined && firstName !== null)
            url_ += "FirstName=" + encodeURIComponent("" + firstName) + "&";
        if (lastName !== undefined && lastName !== null)
            url_ += "LastName=" + encodeURIComponent("" + lastName) + "&";
        if (phone !== undefined && phone !== null)
            url_ += "Phone=" + encodeURIComponent("" + phone) + "&";
        if (email !== undefined && email !== null)
            url_ += "Email=" + encodeURIComponent("" + email) + "&";
        if (street !== undefined && street !== null)
            url_ += "Street=" + encodeURIComponent("" + street) + "&";
        if (city !== undefined && city !== null)
            url_ += "City=" + encodeURIComponent("" + city) + "&";
        if (state !== undefined && state !== null)
            url_ += "State=" + encodeURIComponent("" + state) + "&";
        if (zipCode !== undefined && zipCode !== null)
            url_ += "ZipCode=" + encodeURIComponent("" + zipCode) + "&";
        if (userId === null)
            throw new Error("The parameter 'userId' cannot be null.");
        else if (userId !== undefined)
            url_ += "UserId=" + encodeURIComponent("" + userId) + "&";
        if (isActive === null)
            throw new Error("The parameter 'isActive' cannot be null.");
        else if (isActive !== undefined)
            url_ += "IsActive=" + encodeURIComponent("" + isActive) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "POST",
            headers: {
                "Accept": "text/plain"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processCreateContact(_response);
        });
    }

    protected processCreateContact(response: Response): Promise<Contact> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = Contact.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<Contact>(<any>null);
    }

    /**
     * @param id (optional) 
     * @param firstName (optional) 
     * @param lastName (optional) 
     * @param phone (optional) 
     * @param email (optional) 
     * @param street (optional) 
     * @param city (optional) 
     * @param state (optional) 
     * @param zipCode (optional) 
     * @param userId (optional) 
     * @param isActive (optional) 
     * @return Success
     */
    updateContact(contactId: number, id: number | undefined, firstName: string | null | undefined, lastName: string | null | undefined, phone: string | null | undefined, email: string | null | undefined, street: string | null | undefined, city: string | null | undefined, state: string | null | undefined, zipCode: string | null | undefined, userId: number | undefined, isActive: boolean | undefined): Promise<void> {
        let url_ = this.baseUrl + "/api/contact/{contactId}?";
        if (contactId === undefined || contactId === null)
            throw new Error("The parameter 'contactId' must be defined.");
        url_ = url_.replace("{contactId}", encodeURIComponent("" + contactId));
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "Id=" + encodeURIComponent("" + id) + "&";
        if (firstName !== undefined && firstName !== null)
            url_ += "FirstName=" + encodeURIComponent("" + firstName) + "&";
        if (lastName !== undefined && lastName !== null)
            url_ += "LastName=" + encodeURIComponent("" + lastName) + "&";
        if (phone !== undefined && phone !== null)
            url_ += "Phone=" + encodeURIComponent("" + phone) + "&";
        if (email !== undefined && email !== null)
            url_ += "Email=" + encodeURIComponent("" + email) + "&";
        if (street !== undefined && street !== null)
            url_ += "Street=" + encodeURIComponent("" + street) + "&";
        if (city !== undefined && city !== null)
            url_ += "City=" + encodeURIComponent("" + city) + "&";
        if (state !== undefined && state !== null)
            url_ += "State=" + encodeURIComponent("" + state) + "&";
        if (zipCode !== undefined && zipCode !== null)
            url_ += "ZipCode=" + encodeURIComponent("" + zipCode) + "&";
        if (userId === null)
            throw new Error("The parameter 'userId' cannot be null.");
        else if (userId !== undefined)
            url_ += "UserId=" + encodeURIComponent("" + userId) + "&";
        if (isActive === null)
            throw new Error("The parameter 'isActive' cannot be null.");
        else if (isActive !== undefined)
            url_ += "IsActive=" + encodeURIComponent("" + isActive) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "PUT",
            headers: {
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processUpdateContact(_response);
        });
    }

    protected processUpdateContact(response: Response): Promise<void> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            return;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<void>(<any>null);
    }

    /**
     * @return Success
     */
    deleteContact(contactId: number): Promise<void> {
        let url_ = this.baseUrl + "/api/contact/{contactId}";
        if (contactId === undefined || contactId === null)
            throw new Error("The parameter 'contactId' must be defined.");
        url_ = url_.replace("{contactId}", encodeURIComponent("" + contactId));
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "DELETE",
            headers: {
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processDeleteContact(_response);
        });
    }

    protected processDeleteContact(response: Response): Promise<void> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            return;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<void>(<any>null);
    }
}

export class UserClient {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        this.http = http ? http : <any>window;
        this.baseUrl = baseUrl ? baseUrl : "";
    }

    /**
     * @return Success
     */
    getUser(email: string | null): Promise<User> {
        let url_ = this.baseUrl + "/api/user/{email}";
        if (email === undefined || email === null)
            throw new Error("The parameter 'email' must be defined.");
        url_ = url_.replace("{email}", encodeURIComponent("" + email));
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "GET",
            headers: {
                "Accept": "text/plain"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetUser(_response);
        });
    }

    protected processGetUser(response: Response): Promise<User> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = User.fromJS(resultData200);
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<User>(<any>null);
    }
}

export class Contact implements IContact {
    id?: number;
    firstName?: string | undefined;
    lastName?: string | undefined;
    phone?: string | undefined;
    email?: string | undefined;
    street?: string | undefined;
    city?: string | undefined;
    state?: string | undefined;
    zipCode?: string | undefined;
    userId?: number;
    isActive?: boolean;

    constructor(data?: IContact) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.firstName = _data["firstName"];
            this.lastName = _data["lastName"];
            this.phone = _data["phone"];
            this.email = _data["email"];
            this.street = _data["street"];
            this.city = _data["city"];
            this.state = _data["state"];
            this.zipCode = _data["zipCode"];
            this.userId = _data["userId"];
            this.isActive = _data["isActive"];
        }
    }

    static fromJS(data: any): Contact {
        data = typeof data === 'object' ? data : {};
        let result = new Contact();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["firstName"] = this.firstName;
        data["lastName"] = this.lastName;
        data["phone"] = this.phone;
        data["email"] = this.email;
        data["street"] = this.street;
        data["city"] = this.city;
        data["state"] = this.state;
        data["zipCode"] = this.zipCode;
        data["userId"] = this.userId;
        data["isActive"] = this.isActive;
        return data; 
    }
}

export interface IContact {
    id?: number;
    firstName?: string | undefined;
    lastName?: string | undefined;
    phone?: string | undefined;
    email?: string | undefined;
    street?: string | undefined;
    city?: string | undefined;
    state?: string | undefined;
    zipCode?: string | undefined;
    userId?: number;
    isActive?: boolean;
}

export class ContactPage implements IContactPage {
    data?: Contact[] | undefined;
    pageNumber?: number;
    pageSize?: number;
    totalPages?: number;

    constructor(data?: IContactPage) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            if (Array.isArray(_data["data"])) {
                this.data = [] as any;
                for (let item of _data["data"])
                    this.data!.push(Contact.fromJS(item));
            }
            this.pageNumber = _data["pageNumber"];
            this.pageSize = _data["pageSize"];
            this.totalPages = _data["totalPages"];
        }
    }

    static fromJS(data: any): ContactPage {
        data = typeof data === 'object' ? data : {};
        let result = new ContactPage();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        if (Array.isArray(this.data)) {
            data["data"] = [];
            for (let item of this.data)
                data["data"].push(item.toJSON());
        }
        data["pageNumber"] = this.pageNumber;
        data["pageSize"] = this.pageSize;
        data["totalPages"] = this.totalPages;
        return data; 
    }
}

export interface IContactPage {
    data?: Contact[] | undefined;
    pageNumber?: number;
    pageSize?: number;
    totalPages?: number;
}

export class User implements IUser {
    id?: number;
    email?: string | undefined;
    isActive?: boolean;

    constructor(data?: IUser) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.email = _data["email"];
            this.isActive = _data["isActive"];
        }
    }

    static fromJS(data: any): User {
        data = typeof data === 'object' ? data : {};
        let result = new User();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["email"] = this.email;
        data["isActive"] = this.isActive;
        return data; 
    }
}

export interface IUser {
    id?: number;
    email?: string | undefined;
    isActive?: boolean;
}

export class ApiException extends Error {
    message: string;
    status: number;
    response: string;
    headers: { [key: string]: any; };
    result: any;

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isApiException = true;

    static isApiException(obj: any): obj is ApiException {
        return obj.isApiException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): any {
    if (result !== null && result !== undefined)
        throw result;
    else
        throw new ApiException(message, status, response, headers, null);
}