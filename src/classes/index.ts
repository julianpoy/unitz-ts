
import { Core } from '../Core';
import { Weight } from './Weight';
import { Area } from './Area';
import { Time } from './Time';
import { Digital } from './Digital';
import { Temperature } from './Temperature';
import { Rotation } from './Rotation';
import { Volume } from './Volume';
import { Length } from './Length';

export function addDefaults()
{
  Core.addClasses(
    Weight,
    Area,
    Time,
    Digital,
    Temperature,
    Rotation,
    Volume,
    Length
  );
}
