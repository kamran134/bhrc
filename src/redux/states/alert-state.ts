export interface IAlert {
    id: string;
    type: AlertType;
    message: string;
}

export type AlertType = 'basic' | 'warning' | 'error' | 'success'