/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/naming-convention */
import { ExceptionCode } from '@capacitor/core';
export class TheTime {

    public _open_time: Date;
    public _close_time: Date;
    public _openAllTime: boolean;

    constructor(open_time: Date,close_time: Date,openAllTime: boolean)
    {
        this._open_time = open_time;
      //  if(this._close_time.toISOString() > this._open_time.toISOString())
                 this._close_time = close_time;
                 this._openAllTime=openAllTime;
        // else
        //    throw new Error('La date de fermeture dois etre superieure a la date de fin!')

    }
}
