export enum IActionTypes
{
    RemoveTeam = 'RemoveTeam',
    RenameTeam = 'RenameTeam',
    AddTeam = "AddTeam"
}
export interface teamState {
    teams: { id: number, name: string }[] | []
}
interface IAddTeamAction
{
    type: IActionTypes.AddTeam;
    payload: { teamName: string, teamId: number,newName: string, }
}
export type ActionTypes = IAddTeamAction;
