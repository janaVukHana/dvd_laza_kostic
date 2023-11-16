export const containerStyles = `
    width: 95%;
    height: 100%;
    max-width: 992px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    @media(max-width: 600px) {
        flex-direction: column;
    }
`;

export const redTextStyles = `
    color: var(--primary-red);
`;