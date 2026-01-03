let requestPromise: Promise<string[]> | null = null;

export const deduplicateEthRequestAccounts = async () => {
    if (requestPromise) {
        return requestPromise;
    }

    if (!window.lux) {
        throw new Error('No Lux provider found');
    }

    requestPromise = window.lux.request<string[]>({ method: 'eth_requestAccounts' })
    return requestPromise;
}
