export enum IActionTypes
{
    AddTeam = "AddTeam"
}
export interface teamState {
    teams: { id: number, name: string }[] | []
}
interface IAddTeamAction
{
    type: IActionTypes.AddTeam;
    payload: { teamName: string }
}
export type ActionTypes = IAddTeamAction;
