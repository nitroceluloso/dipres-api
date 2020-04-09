
export const parseIfNumber = (value: string | number ) => {
    return isNaN(value as number) ? value : parseFloat(value as string);
}