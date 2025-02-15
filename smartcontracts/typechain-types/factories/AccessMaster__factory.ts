/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { AccessMaster, AccessMasterInterface } from "../AccessMaster";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AccessControlBadConfirmation",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "neededRole",
        type: "bytes32",
      },
    ],
    name: "AccessControlUnauthorizedAccount",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "FLOW_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "FLOW_CREATOR_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "FLOW_OPERATOR_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPayoutAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getRoleMember",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleMemberCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "isAdmin",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "isCreator",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "isOperator",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "callerConfirmation",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_payoutAddress",
        type: "address",
      },
    ],
    name: "setPayoutAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
    ],
    name: "updateName",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
    ],
    name: "updateSymbol",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "version",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60c0604052600f60809081526e26bc9020b1b1b2b9b9a6b0b9ba32b960891b60a05260029062000030908262000416565b50604080518082019091526002815261414d60f01b602082015260039062000059908262000416565b503480156200006757600080fd5b5062000083600080516020620012ab8339815191528062000141565b620000ad600080516020620012cb833981519152600080516020620012ab83398151915262000141565b620000d76000805160206200128b833981519152600080516020620012cb83398151915262000141565b620000f2600080516020620012ab833981519152336200018c565b506200010e600080516020620012cb83398151915233620001c9565b620001296000805160206200128b83398151915233620001c9565b600480546001600160a01b03191633179055620004e2565b600082815260208190526040808220600101805490849055905190918391839186917fbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff9190a4505050565b6000806200019b8484620001f8565b90508015620001c0576000848152600160205260409020620001be9084620002a6565b505b90505b92915050565b600082815260208190526040902060010154620001e681620002bd565b620001f283836200018c565b50505050565b6000828152602081815260408083206001600160a01b038516845290915281205460ff166200029d576000838152602081815260408083206001600160a01b03861684529091529020805460ff19166001179055620002543390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a4506001620001c3565b506000620001c3565b6000620001c0836001600160a01b038416620002cc565b620002c9813362000315565b50565b60008181526001830160205260408120546200029d57508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155620001c3565b6000828152602081815260408083206001600160a01b038516845290915290205460ff166200036d5760405163e2517d3f60e01b81526001600160a01b03821660048201526024810183905260440160405180910390fd5b5050565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200039c57607f821691505b602082108103620003bd57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200041157600081815260208120601f850160051c81016020861015620003ec5750805b601f850160051c820191505b818110156200040d57828155600101620003f8565b5050505b505050565b81516001600160401b0381111562000432576200043262000371565b6200044a8162000443845462000387565b84620003c3565b602080601f831160018114620004825760008415620004695750858301515b600019600386901b1c1916600185901b1785556200040d565b600085815260208120601f198616915b82811015620004b35788860151825594840194600190910190840162000492565b5085821015620004d25787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b610d9980620004f26000396000f3fe608060405234801561001057600080fd5b50600436106101425760003560e01c80637b75083c116100b85780639ea5722b1161007c5780639ea5722b146102d8578063a217fddf146102ff578063ca15c87314610307578063d547741f1461031a578063e554d2341461032d578063efd460651461033e57600080fd5b80637b75083c1461026a57806384da92a71461027f5780639010d07c1461029257806391d14854146102bd57806395d89b41146102d057600080fd5b806333ea51a81161010a57806333ea51a8146101dd57806336568abe146101f0578063537f53121461020357806354fd4d5014610216578063611ed8cb146102305780636d70f7ae1461025757600080fd5b806301ffc9a71461014757806306fdde031461016f578063248a9ca31461018457806324d7806c146101b55780632f2ff15d146101c8575b600080fd5b61015a6101553660046109d1565b610351565b60405190151581526020015b60405180910390f35b61017761037c565b60405161016691906109fb565b6101a7610192366004610a49565b60009081526020819052604090206001015490565b604051908152602001610166565b61015a6101c3366004610a7e565b61040a565b6101db6101d6366004610a99565b610424565b005b6101db6101eb366004610a7e565b61044f565b6101db6101fe366004610a99565b6104e6565b6101db610211366004610adb565b61051e565b61021e600181565b60405160ff9091168152602001610166565b6101a77f9e62e2fe49176359be731211a93beb8a4b41d6d0345b62f64c4f4e7b56ba503281565b61015a610265366004610a7e565b610542565b6101a7600080516020610d4483398151915281565b6101db61028d366004610adb565b61056e565b6102a56102a0366004610b8c565b610592565b6040516001600160a01b039091168152602001610166565b61015a6102cb366004610a99565b6105b1565b6101776105da565b6101a77fb75d0c3e4b0e01fa592ef743acc55a0b7765ffd271595abd71aa99cbf3518c0781565b6101a7600081565b6101a7610315366004610a49565b6105e7565b6101db610328366004610a99565b6105fe565b6004546001600160a01b03166102a5565b61015a61034c366004610a7e565b610623565b60006001600160e01b03198216635a05180f60e01b148061037657506103768261064f565b92915050565b6002805461038990610bae565b80601f01602080910402602001604051908101604052809291908181526020018280546103b590610bae565b80156104025780601f106103d757610100808354040283529160200191610402565b820191906000526020600020905b8154815290600101906020018083116103e557829003601f168201915b505050505081565b6000610376600080516020610d44833981519152836105b1565b60008281526020819052604090206001015461043f81610684565b6104498383610691565b50505050565b610467600080516020610d44833981519152336105b1565b6104c45760405162461bcd60e51b8152602060048201526024808201527f4163636573734d61737465723a2055736572206973206e6f7420617574686f726044820152631a5e995960e21b60648201526084015b60405180910390fd5b600480546001600160a01b0319166001600160a01b0392909216919091179055565b6001600160a01b038116331461050f5760405163334bd91960e11b815260040160405180910390fd5b61051982826106c6565b505050565b600080516020610d4483398151915261053681610684565b60036105198382610c36565b60006103767f9e62e2fe49176359be731211a93beb8a4b41d6d0345b62f64c4f4e7b56ba5032836105b1565b600080516020610d4483398151915261058681610684565b60026105198382610c36565b60008281526001602052604081206105aa90836106f3565b9392505050565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b6003805461038990610bae565b6000818152600160205260408120610376906106ff565b60008281526020819052604090206001015461061981610684565b61044983836106c6565b60006103767fb75d0c3e4b0e01fa592ef743acc55a0b7765ffd271595abd71aa99cbf3518c07836105b1565b60006001600160e01b03198216637965db0b60e01b148061037657506301ffc9a760e01b6001600160e01b0319831614610376565b61068e8133610709565b50565b60008061069e8484610746565b905080156105aa5760008481526001602052604090206106be90846107d8565b509392505050565b6000806106d384846107ed565b905080156105aa5760008481526001602052604090206106be9084610858565b60006105aa838361086d565b6000610376825490565b61071382826105b1565b6107425760405163e2517d3f60e01b81526001600160a01b0382166004820152602481018390526044016104bb565b5050565b600061075283836105b1565b6107d0576000838152602081815260408083206001600160a01b03861684529091529020805460ff191660011790556107883390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a4506001610376565b506000610376565b60006105aa836001600160a01b038416610897565b60006107f983836105b1565b156107d0576000838152602081815260408083206001600160a01b0386168085529252808320805460ff1916905551339286917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a4506001610376565b60006105aa836001600160a01b0384166108de565b600082600001828154811061088457610884610cf6565b9060005260206000200154905092915050565b60008181526001830160205260408120546107d057508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610376565b600081815260018301602052604081205480156109c7576000610902600183610d0c565b855490915060009061091690600190610d0c565b905080821461097b57600086600001828154811061093657610936610cf6565b906000526020600020015490508087600001848154811061095957610959610cf6565b6000918252602080832090910192909255918252600188019052604090208390555b855486908061098c5761098c610d2d565b600190038181906000526020600020016000905590558560010160008681526020019081526020016000206000905560019350505050610376565b6000915050610376565b6000602082840312156109e357600080fd5b81356001600160e01b0319811681146105aa57600080fd5b600060208083528351808285015260005b81811015610a2857858101830151858201604001528201610a0c565b506000604082860101526040601f19601f8301168501019250505092915050565b600060208284031215610a5b57600080fd5b5035919050565b80356001600160a01b0381168114610a7957600080fd5b919050565b600060208284031215610a9057600080fd5b6105aa82610a62565b60008060408385031215610aac57600080fd5b82359150610abc60208401610a62565b90509250929050565b634e487b7160e01b600052604160045260246000fd5b600060208284031215610aed57600080fd5b813567ffffffffffffffff80821115610b0557600080fd5b818401915084601f830112610b1957600080fd5b813581811115610b2b57610b2b610ac5565b604051601f8201601f19908116603f01168101908382118183101715610b5357610b53610ac5565b81604052828152876020848701011115610b6c57600080fd5b826020860160208301376000928101602001929092525095945050505050565b60008060408385031215610b9f57600080fd5b50508035926020909101359150565b600181811c90821680610bc257607f821691505b602082108103610be257634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111561051957600081815260208120601f850160051c81016020861015610c0f5750805b601f850160051c820191505b81811015610c2e57828155600101610c1b565b505050505050565b815167ffffffffffffffff811115610c5057610c50610ac5565b610c6481610c5e8454610bae565b84610be8565b602080601f831160018114610c995760008415610c815750858301515b600019600386901b1c1916600185901b178555610c2e565b600085815260208120601f198616915b82811015610cc857888601518255948401946001909101908401610ca9565b5085821015610ce65787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b634e487b7160e01b600052603260045260246000fd5b8181038181111561037657634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603160045260246000fdfe8f882e9b3b0c043c8507802fbb9a0ed808c8f0587361ab18424493e6841512a8a2646970667358221220a3d37e42e28caba8c2e36008d81b64ed3896f79154b74ac1e3a7744ff13db7c364736f6c63430008140033b75d0c3e4b0e01fa592ef743acc55a0b7765ffd271595abd71aa99cbf3518c078f882e9b3b0c043c8507802fbb9a0ed808c8f0587361ab18424493e6841512a89e62e2fe49176359be731211a93beb8a4b41d6d0345b62f64c4f4e7b56ba5032";

type AccessMasterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AccessMasterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AccessMaster__factory extends ContractFactory {
  constructor(...args: AccessMasterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "AccessMaster";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<AccessMaster> {
    return super.deploy(overrides || {}) as Promise<AccessMaster>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): AccessMaster {
    return super.attach(address) as AccessMaster;
  }
  connect(signer: Signer): AccessMaster__factory {
    return super.connect(signer) as AccessMaster__factory;
  }
  static readonly contractName: "AccessMaster";
  public readonly contractName: "AccessMaster";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AccessMasterInterface {
    return new utils.Interface(_abi) as AccessMasterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AccessMaster {
    return new Contract(address, _abi, signerOrProvider) as AccessMaster;
  }
}
