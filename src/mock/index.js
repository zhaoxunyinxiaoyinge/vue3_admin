import Mock from "mock";

export function mockHttp(url, method, data) {
    Mock.setup({
        timeout: 400
    });
    return Mock.mock(url, method, data);
}