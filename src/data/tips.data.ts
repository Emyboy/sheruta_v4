
export type Tip = {
    text: string,
    forSeekers: boolean | null;
}


export let tips: Tip[] = [
    {
        text: "Uploading an image of yourself will boost your authenticity.",
        forSeekers: false
    },
    {
        text: "Verifying your profile will improve your visibility and authenticity.",
        forSeekers: null
    },
    {
        text: "Posting your request for a space is important to lets hosts understand your needs.",
        forSeekers: true
    }

]