import React from 'react';

interface TableProps {
    children: React.ReactNode;
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLTableElement>) => void;
}

interface TableHeaderProps {
    children: React.ReactNode;
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLTableSectionElement>) => void;
}

interface TableBodyProps {
    children: React.ReactNode;
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLTableSectionElement>) => void;
}

interface TableRowProps {
    children: React.ReactNode;
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLTableRowElement>) => void;
}

interface TableHeadProps {
    children: React.ReactNode;
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLTableCellElement>) => void;
}

interface TableCellProps {
    children: React.ReactNode;
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLTableCellElement>) => void;
}

const Table: React.FC<TableProps> = ({ children, className, onClick }) => (
    <div className="overflow-x-auto">
        <table
            className={`min-w-full divide-y divide-gray-200 ${className || ''}`}
            onClick={onClick}
        >
            {children}
        </table>
    </div>
);

const TableHeader: React.FC<TableHeaderProps> = ({ children, className, onClick }) => (
    <thead
        className={`bg-gray-50 ${className || ''}`}
        onClick={onClick}
    >
    {children}
    </thead>
);

const TableBody: React.FC<TableBodyProps> = ({ children, className, onClick }) => (
    <tbody
        className={`bg-white divide-y divide-gray-200 ${className || ''}`}
        onClick={onClick}
    >
    {children}
    </tbody>
);

const TableRow: React.FC<TableRowProps> = ({ children, className, onClick }) => (
    <tr
        className={`hover:bg-gray-50 ${className || ''}`}
        onClick={onClick}
    >
        {children}
    </tr>
);

const TableHead: React.FC<TableHeadProps> = ({ children, className, onClick }) => (
    <th
        scope="col"
        className={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${className || ''}`}
        onClick={onClick}
    >
        {children}
    </th>
);

const TableCell: React.FC<TableCellProps> = ({ children, className, onClick }) => (
    <td
        className={`px-6 py-4 whitespace-nowrap ${className || ''}`}
        onClick={onClick}
    >
        {children}
    </td>
);

// Export named exports
export { Table, TableHeader, TableBody, TableRow, TableHead, TableCell };