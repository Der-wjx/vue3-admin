import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'
import userMock from './modules/user.js'
export const mockModules = [...userMock]
export function setupMockServer() {
    createProdMockServer(mockModules)
}
