/*
 * Copyright (C) 2016 - present Juergen Zimmermann, Florian Goebel, Hochschule Karlsruhe
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

/**
 * Das Modul besteht aus der Entity-Klasse.
 * @packageDocumentation
 */
/* eslint-disable max-classes-per-file, @typescript-eslint/no-magic-numbers */

import {
    ArrayUnique,
    IsArray,
    IsBoolean,
    IsISBN,
    IsISO8601,
    IsInt,
    IsOptional,
    IsPositive,
    IsUrl,
    Matches,
    Max,
    Min,
    ValidateNested,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ModellDTO } from './modellDTO.entity.js';
import { SitzplatzDTO } from './sitzplatzDTO.entity.js';
import { Type } from 'class-transformer';

export const MAX_RATING = 5;

/**
 * Entity-Klasse für Bücher ohne TypeORM und ohne Referenzen.
 */
export class FlugzeugDtoOhneRef {
    @IsInt()
    @Min(0)
    @Max(MAX_RATING)
    @ApiProperty({ example: 5, type: Number })
    readonly rating: number | undefined;

    @IsBoolean()
    @ApiProperty({ example: true, type: Boolean })
    readonly einsatzbereit: boolean | undefined;

    @IsPositive()
    @ApiProperty({ example: 1, type: Number })
    // statt number ggf. Decimal aus decimal.js analog zu BigDecimal von Java
    readonly preis!: number;

    @IsISO8601({ strict: true })
    @IsOptional()
    @ApiProperty({ example: '2021-01-31' })
    readonly baujahr: Date | string | undefined;
}

/**
 * Entity-Klasse für Bücher ohne TypeORM.
 */
export class FlugzeugDTO extends FlugzeugDtoOhneRef {
    @ValidateNested()
    @Type(() => ModellDTO)
    @ApiProperty({ type: ModellDTO })
    readonly modell!: ModellDTO; // NOSONAR

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => SitzplatzDTO)
    @ApiProperty({ type: [SitzplatzDTO] })
    readonly sitzplaetze: SitzplatzDTO[] | undefined;

    // AbbildungDTO
}
/* eslint-enable max-classes-per-file, @typescript-eslint/no-magic-numbers */
