"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7604],{68835:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var t=s(85893),a=s(11151);const c={title:"Messages",sidebar_label:"Messages",sidebar_position:5,slug:"/apps/interchain-accounts/messages"},o="Messages",i={id:"apps/interchain-accounts/messages",title:"Messages",description:"MsgRegisterInterchainAccount",source:"@site/docs/02-apps/02-interchain-accounts/05-messages.md",sourceDirName:"02-apps/02-interchain-accounts",slug:"/apps/interchain-accounts/messages",permalink:"/main/apps/interchain-accounts/messages",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Messages",sidebar_label:"Messages",sidebar_position:5,slug:"/apps/interchain-accounts/messages"},sidebar:"defaultSidebar",previous:{title:"Integration",permalink:"/main/apps/interchain-accounts/integration"},next:{title:"Parameters",permalink:"/main/apps/interchain-accounts/parameters"}},r={},d=[{value:"<code>MsgRegisterInterchainAccount</code>",id:"msgregisterinterchainaccount",level:2},{value:"<code>MsgSendTx</code>",id:"msgsendtx",level:2},{value:"Queries",id:"queries",level:3},{value:"Atomicity",id:"atomicity",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"messages",children:"Messages"}),"\n",(0,t.jsx)(n.h2,{id:"msgregisterinterchainaccount",children:(0,t.jsx)(n.code,{children:"MsgRegisterInterchainAccount"})}),"\n",(0,t.jsxs)(n.p,{children:["An Interchain Accounts channel handshake can be initiated using ",(0,t.jsx)(n.code,{children:"MsgRegisterInterchainAccount"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"type MsgRegisterInterchainAccount struct {\n  Owner        string\n  ConnectionID string\n  Version      string\n  Ordering     channeltypes.Order\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"This message is expected to fail if:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Owner"})," is an empty string or contains more than 2048 bytes."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ConnectionID"})," is invalid (see ",(0,t.jsx)(n.a,{href:"https://github.com/cosmos/ibc/blob/master/spec/core/ics-024-host-requirements/README.md#paths-identifiers-separators",children:"24-host naming requirements"}),")."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["This message will construct a new ",(0,t.jsx)(n.code,{children:"MsgChannelOpenInit"})," on chain and route it to the core IBC message server to initiate the opening step of the channel handshake."]}),"\n",(0,t.jsxs)(n.p,{children:["The controller submodule will generate a new port identifier and claim the associated port capability. The caller is expected to provide an appropriate application version string. For example, this may be an ICS-27 JSON encoded ",(0,t.jsx)(n.a,{href:"https://github.com/cosmos/ibc-go/blob/v6.0.0/proto/ibc/applications/interchain_accounts/v1/metadata.proto#L11",children:(0,t.jsx)(n.code,{children:"Metadata"})})," type or an ICS-29 JSON encoded ",(0,t.jsx)(n.a,{href:"https://github.com/cosmos/ibc-go/blob/v6.0.0/proto/ibc/applications/fee/v1/metadata.proto#L11",children:(0,t.jsx)(n.code,{children:"Metadata"})})," type with a nested application version.\nIf the ",(0,t.jsx)(n.code,{children:"Version"})," string is omitted, the controller submodule will construct a default version string in the ",(0,t.jsx)(n.code,{children:"OnChanOpenInit"})," handshake callback."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"type MsgRegisterInterchainAccountResponse struct {\n  ChannelID string\n  PortId string\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"ChannelID"})," and ",(0,t.jsx)(n.code,{children:"PortID"})," are returned in the message response."]}),"\n",(0,t.jsx)(n.h2,{id:"msgsendtx",children:(0,t.jsx)(n.code,{children:"MsgSendTx"})}),"\n",(0,t.jsxs)(n.p,{children:["An Interchain Accounts transaction can be executed on a remote host chain by sending a ",(0,t.jsx)(n.code,{children:"MsgSendTx"})," from the corresponding controller chain:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"type MsgSendTx struct {\n  Owner           string\n  ConnectionID    string\n  PacketData      InterchainAccountPacketData \n  RelativeTimeout uint64\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"This message is expected to fail if:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Owner"})," is an empty string or contains more than 2048 bytes."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ConnectionID"})," is invalid (see ",(0,t.jsx)(n.a,{href:"https://github.com/cosmos/ibc/blob/master/spec/core/ics-024-host-requirements/README.md#paths-identifiers-separators",children:"24-host naming requirements"}),")."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"PacketData"})," contains an ",(0,t.jsx)(n.code,{children:"UNSPECIFIED"})," type enum, the length of ",(0,t.jsx)(n.code,{children:"Data"})," bytes is zero or the ",(0,t.jsx)(n.code,{children:"Memo"})," field exceeds 256 characters in length."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"RelativeTimeout"})," is zero."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["This message will create a new IBC packet with the provided ",(0,t.jsx)(n.code,{children:"PacketData"})," and send it via the channel associated with the ",(0,t.jsx)(n.code,{children:"Owner"})," and ",(0,t.jsx)(n.code,{children:"ConnectionID"}),".\nThe ",(0,t.jsx)(n.code,{children:"PacketData"})," is expected to contain a list of serialized ",(0,t.jsx)(n.code,{children:"[]sdk.Msg"})," in the form of ",(0,t.jsx)(n.code,{children:"CosmosTx"}),". Please note the signer field of each ",(0,t.jsx)(n.code,{children:"sdk.Msg"})," must be the interchain account address.\nWhen the packet is relayed to the host chain, the ",(0,t.jsx)(n.code,{children:"PacketData"})," is unmarshalled and the messages are authenticated and executed."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"type MsgSendTxResponse struct {\n  Sequence uint64\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The packet ",(0,t.jsx)(n.code,{children:"Sequence"})," is returned in the message response."]}),"\n",(0,t.jsx)(n.h3,{id:"queries",children:"Queries"}),"\n",(0,t.jsxs)(n.p,{children:["It is possible to use ",(0,t.jsx)(n.a,{href:"https://github.com/cosmos/ibc-go/blob/eecfa5c09a4c38a5c9f2cc2a322d2286f45911da/proto/ibc/applications/interchain_accounts/host/v1/tx.proto#L41-L51",children:(0,t.jsx)(n.code,{children:"MsgModuleQuerySafe"})})," to execute a list of queries on the host chain. This message can be included in the list of encoded ",(0,t.jsx)(n.code,{children:"sdk.Msg"}),"s of ",(0,t.jsx)(n.code,{children:"InterchainPacketData"}),". The host chain will return on the acknowledgment the responses for all the queries. Please note that only module safe queries can be executed (",(0,t.jsx)(n.a,{href:"https://docs.cosmos.network/main/build/building-modules/query-services#calling-queries-from-the-state-machine",children:"deterministic queries that are safe to be called from within the state machine"}),")."]}),"\n",(0,t.jsx)(n.p,{children:"The queries available from Cosmos SDK are:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",children:"/cosmos.auth.v1beta1.Query/Accounts\n/cosmos.auth.v1beta1.Query/Account\n/cosmos.auth.v1beta1.Query/AccountAddressByID\n/cosmos.auth.v1beta1.Query/Params\n/cosmos.auth.v1beta1.Query/ModuleAccounts\n/cosmos.auth.v1beta1.Query/ModuleAccountByName\n/cosmos.auth.v1beta1.Query/AccountInfo\n/cosmos.bank.v1beta1.Query/Balance\n/cosmos.bank.v1beta1.Query/AllBalances\n/cosmos.bank.v1beta1.Query/SpendableBalances\n/cosmos.bank.v1beta1.Query/SpendableBalanceByDenom\n/cosmos.bank.v1beta1.Query/TotalSupply\n/cosmos.bank.v1beta1.Query/SupplyOf\n/cosmos.bank.v1beta1.Query/Params\n/cosmos.bank.v1beta1.Query/DenomMetadata\n/cosmos.bank.v1beta1.Query/DenomMetadataByQueryString\n/cosmos.bank.v1beta1.Query/DenomsMetadata\n/cosmos.bank.v1beta1.Query/DenomOwners\n/cosmos.bank.v1beta1.Query/SendEnabled\n/cosmos.circuit.v1.Query/Account\n/cosmos.circuit.v1.Query/Accounts\n/cosmos.circuit.v1.Query/DisabledList\n/cosmos.staking.v1beta1.Query/Validators\n/cosmos.staking.v1beta1.Query/Validator\n/cosmos.staking.v1beta1.Query/ValidatorDelegations\n/cosmos.staking.v1beta1.Query/ValidatorUnbondingDelegations\n/cosmos.staking.v1beta1.Query/Delegation\n/cosmos.staking.v1beta1.Query/UnbondingDelegation\n/cosmos.staking.v1beta1.Query/DelegatorDelegations\n/cosmos.staking.v1beta1.Query/DelegatorUnbondingDelegations\n/cosmos.staking.v1beta1.Query/Redelegations\n/cosmos.staking.v1beta1.Query/DelegatorValidators\n/cosmos.staking.v1beta1.Query/DelegatorValidator\n/cosmos.staking.v1beta1.Query/HistoricalInfo\n/cosmos.staking.v1beta1.Query/Pool\n/cosmos.staking.v1beta1.Query/Params\n"})}),"\n",(0,t.jsx)(n.p,{children:"And the query available from ibc-go is:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",children:"/ibc.core.client.v1.Query/VerifyMembership\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The following code block shows an example of how ",(0,t.jsx)(n.code,{children:"MsgModuleQuerySafe"})," can be used to query the account balance of an account on the host chain. The resulting packet data variable is used to set the ",(0,t.jsx)(n.code,{children:"PacketData"})," of ",(0,t.jsx)(n.code,{children:"MsgSendTx"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'balanceQuery := banktypes.NewQueryBalanceRequest("cosmos1...", "uatom")\nqueryBz, err := balanceQuery.Marshal()\n\n// signer of message must be the interchain account on the host\nqueryMsg := icahosttypes.NewMsgModuleQuerySafe("cosmos2...", []*icahosttypes.QueryRequest{\n  {\n    Path: "/cosmos.bank.v1beta1.Query/Balance",\n    Data: queryBz,\n  },\n})\n\nbz, err := icatypes.SerializeCosmosTx(cdc, []proto.Message{queryMsg}, icatypes.EncodingProtobuf)\n\npacketData := icatypes.InterchainAccountPacketData{\n  Type: icatypes.EXECUTE_TX,\n  Data: bz,\n  Memo: "",\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"atomicity",children:"Atomicity"}),"\n",(0,t.jsxs)(n.p,{children:["As the Interchain Accounts module supports the execution of multiple transactions using the Cosmos SDK ",(0,t.jsx)(n.code,{children:"Msg"})," interface, it provides the same atomicity guarantees as Cosmos SDK-based applications, leveraging the ",(0,t.jsx)(n.a,{href:"https://docs.cosmos.network/main/learn/advanced/store#cachemultistore",children:(0,t.jsx)(n.code,{children:"CacheMultiStore"})})," architecture provided by the ",(0,t.jsx)(n.a,{href:"https://docs.cosmos.network/main/learn/advanced/context.html",children:(0,t.jsx)(n.code,{children:"Context"})})," type."]}),"\n",(0,t.jsxs)(n.p,{children:["This provides atomic execution of transactions when using Interchain Accounts, where state changes are only committed if all ",(0,t.jsx)(n.code,{children:"Msg"}),"s succeed."]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>o});var t=s(67294);const a={},c=t.createContext(a);function o(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);