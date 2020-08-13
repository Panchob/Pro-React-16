import { ActionTypes } from "./Type"
import { data as phData } from "./PlaceholderData"

export const loadData = (dataType) => ({
    type: ActionTypes.DATA_LOAD,
    payload: {
        dataType: dataType,
        data: phData[dataType]
    }
});