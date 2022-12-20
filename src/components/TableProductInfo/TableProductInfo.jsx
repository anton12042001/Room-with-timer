import React from 'react';
import cl from './TableProductInfo.module.css'

const TableProductInfo = () => {
    return (
        <div className={cl.tableContainer} >
            <div className={cl.tableItem} >
                <div>Назначение</div>
                <div>срок изготовления</div>
                <div>Гарантийные обязательства</div>
                <div>Стоимость</div>
                <div>Действия</div>
            </div>
            <div className={cl.tableItem}>
                <div className={cl.tableItemName} >имя</div>
                <div>-</div>
                <div>80</div>
                <div>24</div>
                <div>30%</div>
            </div>
            <div className={cl.tableItem}>
                <div className={cl.tableItemName} >имя</div>
                <div>-</div>
                <div>90</div>
                <div>24</div>
                <div>100%</div>
            </div>
            <div className={cl.tableItem}>
                <div className={cl.tableItemName} >имя</div>
                <div>-</div>
                <div>75</div>
                <div>22</div>
                <div>60%</div>
            </div>
            <div className={cl.tableItem}>
                <div className={cl.tableItemName} >имя</div>
                <div>-</div>
                <div>120</div>
                <div>36</div>
                <div>50%</div>
            </div>
        </div>
    );
};

export default TableProductInfo;