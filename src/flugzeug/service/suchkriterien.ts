/*
 * Copyright (C) 2016 - present Juergen Zimmermann, Hochschule Karlsruhe
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
 * Das Modul besteht aus der Klasse {@linkcode FlugzeugReadService}.
 * @packageDocumentation
 */

/**
 * Typdefinition für `FlugzeugReadService.find()`und `QueryBuilder.build()`
 */
export interface Suchkriterien {
    readonly preis?: number;
    readonly eimsatzbereit?: boolean;
    readonly baujahr?: string;
    readonly modell?: string;
}
