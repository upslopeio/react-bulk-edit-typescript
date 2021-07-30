export type Label = {
    text: string,
    color: "blue" | "yellow" | "red"
};

export type Issue = {
    title: string,
    labels: Label[],
    selected: boolean
};
