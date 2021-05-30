export const MODAL_WIDTH = 260;
export const MULTIPLE_ARRAY = [1, 2, 3, 4, 10];
export const RECURRING_ARRAY = [5000, 10000, 15000, '직접입력'];

export const numberWithCommas = (value) => {
    return value?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
