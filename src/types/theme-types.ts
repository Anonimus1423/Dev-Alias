interface IColors {
    backgroundColor: string;
    mainColor: string;
    secondColor: string;
    thirdColor: string;
    defaultTextColor: string;
    secondTextColor: string;
    thirdTextColor: string;
    additionalColor_1?: string;
    additionalColor_2?: string;
    additionalColor_3?: string;
    additionalColor_4?: string;
}

export interface ITheme{
    colors: IColors;
}