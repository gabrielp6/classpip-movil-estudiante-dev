// Este modulo lo he creado para conseguir que el DataPicker
// muestre la fecha en el formato que quiero, al seleccionarala.

import { NativeDateAdapter } from '@angular/material/core';

import * as moment from 'moment';
import { Injectable } from "@angular/core";

@Injectable()
export class CustomDateAdapter extends NativeDateAdapter {
    // tslint:disable-next-line:ban-types
    format(date: Date, displayFormat: Object): string {
        moment.locale('es'); // Choose the locale
        const formatString = (displayFormat === 'input') ? 'dd.MM.yyyy' : 'LL';
        return moment(date).format(formatString);
    }
}
