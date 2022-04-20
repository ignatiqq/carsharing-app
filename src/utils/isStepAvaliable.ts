import type { IOrderSteps } from "constants/allOrderSteps";

interface IIsStepAvaliable {
    allOrderSteps: IOrderSteps,
    currentStep: number,
    requestedStepPathname: string
}

export const isStepAvaliable = ({ allOrderSteps, currentStep, requestedStepPathname }: IIsStepAvaliable) => {
    const requestedStep = allOrderSteps.find(item => item.pathname === requestedStepPathname);
    if(requestedStep) {
        return requestedStep.step <= currentStep
    } 
    return true
}