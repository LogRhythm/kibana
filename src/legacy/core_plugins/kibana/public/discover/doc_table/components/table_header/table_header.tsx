/*
 * THIS FILE HAS BEEN MODIFIED FROM THE ORIGINAL SOURCE
 * This comment only applies to modifications applied after the f421eec40b5a9f31383591e30bef86724afcd2b3 commit
 *
 * Copyright 2020 LogRhythm, Inc
 * Licensed under the LogRhythm Global End User License Agreement,
 * which can be found through this page: https://logrhythm.com/about/logrhythm-terms-and-conditions/
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import React from 'react';
import { IndexPattern } from 'ui/index_patterns';
// @ts-ignore
import { shortenDottedString } from '../../../../../common/utils/shorten_dotted_string';
import { TableHeaderColumn } from './table_header_column';
import { SortOrder, getDisplayedColumns } from './helpers';

interface Props {
  columns: string[];
  hideTimeColumn: boolean;
  indexPattern: IndexPattern;
  isShortDots: boolean;
  onChangeSortOrder?: (sortOrder: SortOrder[]) => void;
  onMoveColumn?: (name: string, index: number) => void;
  onRemoveColumn?: (name: string) => void;
  onSelectAll?: () => void;
  onSelectCurrentPage?: () => void;
  sortOrder: SortOrder[];
}

export function TableHeader({
  columns,
  hideTimeColumn,
  indexPattern,
  isShortDots,
  onChangeSortOrder,
  onMoveColumn,
  onRemoveColumn,
  onSelectAll,
  onSelectCurrentPage,
  sortOrder,
}: Props) {
  const displayedColumns = getDisplayedColumns(columns, indexPattern, hideTimeColumn, isShortDots);

  return (
    <tr data-test-subj="docTableHeader" className="kbnDocTableHeader">
      <th style={{ width: '24px' }}></th>
      {displayedColumns.map(col => {
        return (
          <TableHeaderColumn
            key={col.name}
            {...col}
            sortOrder={sortOrder}
            onMoveColumn={onMoveColumn}
            onRemoveColumn={onRemoveColumn}
            onChangeSortOrder={onChangeSortOrder}
            onSelectAll={onSelectAll}
            onSelectCurrentPage={onSelectCurrentPage}
          />
        );
      })}
    </tr>
  );
}
