import AppService from "./AppService";

  
export const handler = async (event: any) => {
    // routing logic
    const appService = new AppService(event);
    return await appService.generateVanifyNumbers();
};
