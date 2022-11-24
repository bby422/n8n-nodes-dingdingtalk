import { ICredentialType, INodeProperties } from 'n8n-workflow';

export class DingTalkCompany implements ICredentialType {
	name = 'dingtalkCompany';
	displayName = 'DingtalkCompany';
	documentationUrl = 'dingtalkCompany';
	properties: INodeProperties[] = [
		{
			displayName: 'Robot Code',
			name: 'robotCode',
			type: 'string',
			default: '',
			required: true
		},
		{
			displayName: 'Access Key Id',
			name: 'accessKeyId',
			type: 'string',
			default: '',
			required: true
		},
		{
			displayName: 'Access Key Secret',
			name: 'accessKeySecret',
			type: 'string',
			typeOptions: {
				password: true,
			},
			default: '',
			required: true
		},
		{
			displayName: 'protocol',
			name: 'protocol',
			type: 'string',
			default: '',
			required: true
		},
		{
			displayName: 'region id',
			name: 'regionId',
			type: 'string',
			default: '',
			required: true
		}
	];
}
