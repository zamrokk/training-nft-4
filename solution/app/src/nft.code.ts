
export const NftCode: { __type: 'NftCode', protocol: string, code: object[] } = {
    __type: 'NftCode',
    protocol: 'PtEdo2ZkT9oKpimTah6x2embF25oss54njMuPzkJTEi5RqfdZFA',
    code: JSON.parse(`[{"prim":"parameter","args":[{"prim":"or","args":[{"prim":"pair","annots":["%buy"],"args":[{"prim":"nat"},{"prim":"nat"},{"prim":"address"}]},{"prim":"or","args":[{"prim":"pair","annots":["%sell"],"args":[{"prim":"nat"},{"prim":"nat"},{"prim":"nat"}]},{"prim":"or","args":[{"prim":"pair","annots":["%mint"],"args":[{"prim":"nat"},{"prim":"nat"},{"prim":"bytes"},{"prim":"bytes"},{"prim":"bytes"},{"prim":"bytes"}]},{"prim":"or","args":[{"prim":"list","annots":["%update_operators"],"args":[{"prim":"or","args":[{"prim":"pair","annots":["%add_operator"],"args":[{"prim":"address","annots":["%owner"]},{"prim":"address","annots":["%operator"]},{"prim":"nat","annots":["%token_id"]}]},{"prim":"pair","annots":["%remove_operator"],"args":[{"prim":"address","annots":["%owner"]},{"prim":"address","annots":["%operator"]},{"prim":"nat","annots":["%token_id"]}]}]}]},{"prim":"or","args":[{"prim":"pair","annots":["%balance_of"],"args":[{"prim":"list","annots":["%requests"],"args":[{"prim":"pair","args":[{"prim":"address","annots":["%owner"]},{"prim":"nat","annots":["%token_id"]}]}]},{"prim":"contract","annots":["%callback"],"args":[{"prim":"list","args":[{"prim":"pair","args":[{"prim":"pair","annots":["%request"],"args":[{"prim":"address","annots":["%owner"]},{"prim":"nat","annots":["%token_id"]}]},{"prim":"nat","annots":["%balance"]}]}]}]}]},{"prim":"list","annots":["%transfer"],"args":[{"prim":"pair","args":[{"prim":"address","annots":["%from_"]},{"prim":"list","annots":["%txs"],"args":[{"prim":"pair","args":[{"prim":"address","annots":["%to_"]},{"prim":"nat","annots":["%token_id"]},{"prim":"nat","annots":["%amount"]}]}]}]}]}]}]}]}]}]}]},{"prim":"storage","args":[{"prim":"pair","args":[{"prim":"set","annots":["%administrators"],"args":[{"prim":"address"}]},{"prim":"map","annots":["%offers"],"args":[{"prim":"pair","args":[{"prim":"address"},{"prim":"nat"}]},{"prim":"pair","args":[{"prim":"nat","annots":["%quantity"]},{"prim":"nat","annots":["%price"]}]}]},{"prim":"big_map","annots":["%ledger"],"args":[{"prim":"pair","args":[{"prim":"address"},{"prim":"nat"}]},{"prim":"nat"}]},{"prim":"big_map","annots":["%metadata"],"args":[{"prim":"string"},{"prim":"bytes"}]},{"prim":"big_map","annots":["%token_metadata"],"args":[{"prim":"nat"},{"prim":"pair","args":[{"prim":"nat","annots":["%token_id"]},{"prim":"map","annots":["%token_info"],"args":[{"prim":"string"},{"prim":"bytes"}]}]}]},{"prim":"big_map","annots":["%operators"],"args":[{"prim":"pair","args":[{"prim":"address"},{"prim":"address"}]},{"prim":"set","args":[{"prim":"nat"}]}]}]}]},{"prim":"code","args":[[{"prim":"LAMBDA","args":[{"prim":"address"},{"prim":"unit"},[{"prim":"PUSH","args":[{"prim":"string"},{"string":"The sender can only manage operators for his own token"}]},{"prim":"SENDER"},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"COMPARE"},{"prim":"EQ"},{"prim":"IF","args":[[{"prim":"DROP"},{"prim":"UNIT"}],[{"prim":"FAILWITH"}]]}]]},{"prim":"LAMBDA","args":[{"prim":"pair","args":[{"prim":"big_map","args":[{"prim":"nat"},{"prim":"pair","args":[{"prim":"nat"},{"prim":"map","args":[{"prim":"string"},{"prim":"bytes"}]}]}]},{"prim":"nat"}]},{"prim":"unit"},[{"prim":"UNPAIR"},{"prim":"SWAP"},{"prim":"GET"},{"prim":"IF_NONE","args":[[{"prim":"PUSH","args":[{"prim":"string"},{"string":"FA2_TOKEN_UNDEFINED"}]},{"prim":"FAILWITH"}],[{"prim":"DROP"}]]},{"prim":"UNIT"}]]},{"prim":"LAMBDA","args":[{"prim":"pair","args":[{"prim":"lambda","args":[{"prim":"address"},{"prim":"unit"}]},{"prim":"pair","args":[{"prim":"big_map","args":[{"prim":"pair","args":[{"prim":"address"},{"prim":"address"}]},{"prim":"set","args":[{"prim":"nat"}]}]},{"prim":"address"},{"prim":"address"},{"prim":"nat"}]}]},{"prim":"big_map","args":[{"prim":"pair","args":[{"prim":"address"},{"prim":"address"}]},{"prim":"set","args":[{"prim":"nat"}]}]},[{"prim":"UNPAIR"},{"prim":"SWAP"},{"prim":"UNPAIR","args":[{"int":"4"}]},{"prim":"DUP","args":[{"int":"3"}]},{"prim":"DUP","args":[{"int":"3"}]},{"prim":"COMPARE"},{"prim":"EQ"},{"prim":"IF","args":[[{"prim":"SWAP"},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"DIG","args":[{"int":"3"}]},{"prim":"DIG","args":[{"int":"4"}]},{"prim":"DROP","args":[{"int":"4"}]}],[{"prim":"DUP","args":[{"int":"2"}]},{"prim":"DIG","args":[{"int":"5"}]},{"prim":"SWAP"},{"prim":"EXEC"},{"prim":"DROP"},{"prim":"DUP"},{"prim":"DUP","args":[{"int":"4"}]},{"prim":"DUP","args":[{"int":"4"}]},{"prim":"PAIR"},{"prim":"GET"},{"prim":"IF_NONE","args":[[{"prim":"EMPTY_SET","args":[{"prim":"nat"}]}],[]]},{"prim":"DIG","args":[{"int":"4"}]},{"prim":"PUSH","args":[{"prim":"bool"},{"prim":"True"}]},{"prim":"SWAP"},{"prim":"UPDATE"},{"prim":"SOME"},{"prim":"DIG","args":[{"int":"3"}]},{"prim":"DIG","args":[{"int":"3"}]},{"prim":"PAIR"},{"prim":"UPDATE"}]]}]]},{"prim":"DUP","args":[{"int":"3"}]},{"prim":"APPLY"},{"prim":"LAMBDA","args":[{"prim":"pair","args":[{"prim":"big_map","args":[{"prim":"pair","args":[{"prim":"address"},{"prim":"nat"}]},{"prim":"nat"}]},{"prim":"address"},{"prim":"nat"}]},{"prim":"nat"},[{"prim":"UNPAIR","args":[{"int":"3"}]},{"prim":"DUG","args":[{"int":"2"}]},{"prim":"PAIR"},{"prim":"GET"},{"prim":"IF_NONE","args":[[{"prim":"PUSH","args":[{"prim":"nat"},{"int":"0"}]}],[]]}]]},{"prim":"LAMBDA","args":[{"prim":"pair","args":[{"prim":"big_map","args":[{"prim":"pair","args":[{"prim":"address"},{"prim":"nat"}]},{"prim":"nat"}]},{"prim":"address"},{"prim":"nat"},{"prim":"nat"}]},{"prim":"big_map","args":[{"prim":"pair","args":[{"prim":"address"},{"prim":"nat"}]},{"prim":"nat"}]},[{"prim":"UNPAIR","args":[{"int":"4"}]},{"prim":"DIG","args":[{"int":"3"}]},{"prim":"SOME"},{"prim":"DIG","args":[{"int":"3"}]},{"prim":"DIG","args":[{"int":"3"}]},{"prim":"PAIR"},{"prim":"UPDATE"}]]},{"prim":"LAMBDA","args":[{"prim":"pair","args":[{"prim":"pair","args":[{"prim":"lambda","args":[{"prim":"pair","args":[{"prim":"big_map","args":[{"prim":"pair","args":[{"prim":"address"},{"prim":"nat"}]},{"prim":"nat"}]},{"prim":"address"},{"prim":"nat"},{"prim":"nat"}]},{"prim":"big_map","args":[{"prim":"pair","args":[{"prim":"address"},{"prim":"nat"}]},{"prim":"nat"}]}]},{"prim":"lambda","args":[{"prim":"pair","args":[{"prim":"big_map","args":[{"prim":"pair","args":[{"prim":"address"},{"prim":"nat"}]},{"prim":"nat"}]},{"prim":"address"},{"prim":"nat"}]},{"prim":"nat"}]}]},{"prim":"pair","args":[{"prim":"big_map","args":[{"prim":"pair","args":[{"prim":"address"},{"prim":"nat"}]},{"prim":"nat"}]},{"prim":"address"},{"prim":"nat"},{"prim":"nat"}]}]},{"prim":"big_map","args":[{"prim":"pair","args":[{"prim":"address"},{"prim":"nat"}]},{"prim":"nat"}]},[{"prim":"UNPAIR"},{"prim":"UNPAIR"},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"UNPAIR","args":[{"int":"4"}]},{"prim":"DUP","args":[{"int":"3"}]},{"prim":"DUP","args":[{"int":"3"}]},{"prim":"DUP","args":[{"int":"3"}]},{"prim":"PAIR","args":[{"int":"3"}]},{"prim":"DIG","args":[{"int":"6"}]},{"prim":"SWAP"},{"prim":"EXEC"},{"prim":"PUSH","args":[{"prim":"string"},{"string":"FA2_INSUFFICIENT_BALANCE"}]},{"prim":"DUP","args":[{"int":"6"}]},{"prim":"DUP","args":[{"int":"3"}]},{"prim":"COMPARE"},{"prim":"GE"},{"prim":"IF","args":[[{"prim":"DROP"}],[{"prim":"FAILWITH"}]]},{"prim":"DIG","args":[{"int":"4"}]},{"prim":"SWAP"},{"prim":"SUB"},{"prim":"ABS"},{"prim":"DUG","args":[{"int":"3"}]},{"prim":"PAIR","args":[{"int":"4"}]},{"prim":"EXEC"}]]},{"prim":"DUP","args":[{"int":"3"}]},{"prim":"DUP","args":[{"int":"3"}]},{"prim":"PAIR"},{"prim":"APPLY"},{"prim":"LAMBDA","args":[{"prim":"pair","args":[{"prim":"pair","args":[{"prim":"lambda","args":[{"prim":"pair","args":[{"prim":"big_map","args":[{"prim":"pair","args":[{"prim":"address"},{"prim":"nat"}]},{"prim":"nat"}]},{"prim":"address"},{"prim":"nat"},{"prim":"nat"}]},{"prim":"big_map","args":[{"prim":"pair","args":[{"prim":"address"},{"prim":"nat"}]},{"prim":"nat"}]}]},{"prim":"lambda","args":[{"prim":"pair","args":[{"prim":"big_map","args":[{"prim":"pair","args":[{"prim":"address"},{"prim":"nat"}]},{"prim":"nat"}]},{"prim":"address"},{"prim":"nat"}]},{"prim":"nat"}]}]},{"prim":"pair","args":[{"prim":"big_map","args":[{"prim":"pair","args":[{"prim":"address"},{"prim":"nat"}]},{"prim":"nat"}]},{"prim":"address"},{"prim":"nat"},{"prim":"nat"}]}]},{"prim":"big_map","args":[{"prim":"pair","args":[{"prim":"address"},{"prim":"nat"}]},{"prim":"nat"}]},[{"prim":"UNPAIR"},{"prim":"UNPAIR"},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"UNPAIR","args":[{"int":"4"}]},{"prim":"DUP","args":[{"int":"3"}]},{"prim":"DUP","args":[{"int":"3"}]},{"prim":"DUP","args":[{"int":"3"}]},{"prim":"PAIR","args":[{"int":"3"}]},{"prim":"DIG","args":[{"int":"6"}]},{"prim":"SWAP"},{"prim":"EXEC"},{"prim":"DIG","args":[{"int":"4"}]},{"prim":"ADD"},{"prim":"DUG","args":[{"int":"3"}]},{"prim":"PAIR","args":[{"int":"4"}]},{"prim":"EXEC"}]]},{"prim":"DUP","args":[{"int":"4"}]},{"prim":"DUP","args":[{"int":"4"}]},{"prim":"PAIR"},{"prim":"APPLY"},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"DROP"},{"prim":"DIG","args":[{"int":"6"}]},{"prim":"UNPAIR"},{"prim":"IF_LEFT","args":[[{"prim":"DIG","args":[{"int":"4"}]},{"prim":"DIG","args":[{"int":"5"}]},{"prim":"DIG","args":[{"int":"6"}]},{"prim":"DIG","args":[{"int":"7"}]},{"prim":"DROP","args":[{"int":"4"}]},{"prim":"UNPAIR","args":[{"int":"3"}]},{"prim":"DUP","args":[{"int":"4"}]},{"prim":"GET","args":[{"int":"3"}]},{"prim":"DUP","args":[{"int":"2"}]},{"prim":"DUP","args":[{"int":"5"}]},{"prim":"PAIR"},{"prim":"GET"},{"prim":"IF_NONE","args":[[{"prim":"DROP","args":[{"int":"6"}]},{"prim":"PUSH","args":[{"prim":"string"},{"string":"3"}]},{"prim":"FAILWITH"}],[{"prim":"PUSH","args":[{"prim":"mutez"},{"int":"1"}]},{"prim":"DUP","args":[{"int":"2"}]},{"prim":"CDR"},{"prim":"MUL"},{"prim":"AMOUNT"},{"prim":"COMPARE"},{"prim":"LT"},{"prim":"IF","args":[[{"prim":"DROP","args":[{"int":"7"}]},{"prim":"PUSH","args":[{"prim":"string"},{"string":"5"}]},{"prim":"FAILWITH"}],[{"prim":"DUP","args":[{"int":"4"}]},{"prim":"CONTRACT","args":[{"prim":"unit"}]},{"prim":"IF_NONE","args":[[{"prim":"PUSH","args":[{"prim":"string"},{"string":"6"}]},{"prim":"FAILWITH"}],[]]},{"prim":"PUSH","args":[{"prim":"mutez"},{"int":"1"}]},{"prim":"DUP","args":[{"int":"3"}]},{"prim":"CDR"},{"prim":"MUL"},{"prim":"UNIT"},{"prim":"TRANSFER_TOKENS"},{"prim":"DUP","args":[{"int":"4"}]},{"prim":"DUP","args":[{"int":"4"}]},{"prim":"DUP","args":[{"int":"7"}]},{"prim":"DUP","args":[{"int":"9"}]},{"prim":"GET","args":[{"int":"5"}]},{"prim":"PAIR","args":[{"int":"4"}]},{"prim":"DIG","args":[{"int":"8"}]},{"prim":"SWAP"},{"prim":"EXEC"},{"prim":"DUP","args":[{"int":"5"}]},{"prim":"DUP","args":[{"int":"5"}]},{"prim":"SOURCE"},{"prim":"DIG","args":[{"int":"3"}]},{"prim":"PAIR","args":[{"int":"4"}]},{"prim":"DIG","args":[{"int":"7"}]},{"prim":"SWAP"},{"prim":"EXEC"},{"prim":"DUP","args":[{"int":"3"}]},{"prim":"DIG","args":[{"int":"5"}]},{"prim":"DIG","args":[{"int":"4"}]},{"prim":"CAR"},{"prim":"SUB"},{"prim":"ABS"},{"prim":"UPDATE","args":[{"int":"1"}]},{"prim":"DUP","args":[{"int":"6"}]},{"prim":"DIG","args":[{"int":"6"}]},{"prim":"GET","args":[{"int":"3"}]},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"SOME"},{"prim":"DIG","args":[{"int":"5"}]},{"prim":"DIG","args":[{"int":"6"}]},{"prim":"PAIR"},{"prim":"UPDATE"},{"prim":"UPDATE","args":[{"int":"3"}]},{"prim":"SWAP"},{"prim":"UPDATE","args":[{"int":"5"}]},{"prim":"NIL","args":[{"prim":"operation"}]},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"CONS"},{"prim":"PAIR"}]]}]]}],[{"prim":"IF_LEFT","args":[[{"prim":"DIG","args":[{"int":"2"}]},{"prim":"DIG","args":[{"int":"3"}]},{"prim":"DIG","args":[{"int":"6"}]},{"prim":"DIG","args":[{"int":"7"}]},{"prim":"DROP","args":[{"int":"4"}]},{"prim":"UNPAIR","args":[{"int":"3"}]},{"prim":"DUP"},{"prim":"SOURCE"},{"prim":"DUP","args":[{"int":"6"}]},{"prim":"GET","args":[{"int":"5"}]},{"prim":"PAIR","args":[{"int":"3"}]},{"prim":"DIG","args":[{"int":"5"}]},{"prim":"SWAP"},{"prim":"EXEC"},{"prim":"DUP","args":[{"int":"3"}]},{"prim":"COMPARE"},{"prim":"GT"},{"prim":"IF","args":[[{"prim":"DROP","args":[{"int":"5"}]},{"prim":"PUSH","args":[{"prim":"string"},{"string":"2"}]},{"prim":"FAILWITH"}],[{"prim":"DUP"},{"prim":"SELF_ADDRESS"},{"prim":"SOURCE"},{"prim":"DUP","args":[{"int":"7"}]},{"prim":"GET","args":[{"int":"10"}]},{"prim":"PAIR","args":[{"int":"4"}]},{"prim":"DIG","args":[{"int":"5"}]},{"prim":"SWAP"},{"prim":"EXEC"},{"prim":"DUP","args":[{"int":"5"}]},{"prim":"DIG","args":[{"int":"5"}]},{"prim":"GET","args":[{"int":"3"}]},{"prim":"DIG","args":[{"int":"5"}]},{"prim":"DIG","args":[{"int":"5"}]},{"prim":"PAIR"},{"prim":"DIG","args":[{"int":"4"}]},{"prim":"SOURCE"},{"prim":"PAIR"},{"prim":"SWAP"},{"prim":"SOME"},{"prim":"SWAP"},{"prim":"UPDATE"},{"prim":"UPDATE","args":[{"int":"3"}]},{"prim":"SWAP"},{"prim":"UPDATE","args":[{"int":"10"}]},{"prim":"NIL","args":[{"prim":"operation"}]},{"prim":"PAIR"}]]}],[{"prim":"IF_LEFT","args":[[{"prim":"DIG","args":[{"int":"2"}]},{"prim":"DIG","args":[{"int":"3"}]},{"prim":"DIG","args":[{"int":"4"}]},{"prim":"DIG","args":[{"int":"5"}]},{"prim":"DIG","args":[{"int":"6"}]},{"prim":"DIG","args":[{"int":"7"}]},{"prim":"DROP","args":[{"int":"6"}]},{"prim":"UNPAIR","args":[{"int":"6"}]},{"prim":"PUSH","args":[{"prim":"nat"},{"int":"0"}]},{"prim":"DUP","args":[{"int":"3"}]},{"prim":"COMPARE"},{"prim":"LE"},{"prim":"IF","args":[[{"prim":"DROP","args":[{"int":"7"}]},{"prim":"PUSH","args":[{"prim":"string"},{"string":"0"}]},{"prim":"FAILWITH"}],[{"prim":"DUP","args":[{"int":"7"}]},{"prim":"CAR"},{"prim":"SENDER"},{"prim":"MEM"},{"prim":"NOT"},{"prim":"IF","args":[[{"prim":"DROP","args":[{"int":"7"}]},{"prim":"PUSH","args":[{"prim":"string"},{"string":"1"}]},{"prim":"FAILWITH"}],[{"prim":"DUP","args":[{"int":"7"}]},{"prim":"DUP","args":[{"int":"8"}]},{"prim":"GET","args":[{"int":"5"}]},{"prim":"DIG","args":[{"int":"3"}]},{"prim":"DUP","args":[{"int":"4"}]},{"prim":"SENDER"},{"prim":"PAIR"},{"prim":"SWAP"},{"prim":"SOME"},{"prim":"SWAP"},{"prim":"UPDATE"},{"prim":"UPDATE","args":[{"int":"5"}]},{"prim":"DIG","args":[{"int":"6"}]},{"prim":"GET","args":[{"int":"9"}]},{"prim":"EMPTY_MAP","args":[{"prim":"string"},{"prim":"bytes"}]},{"prim":"PUSH","args":[{"prim":"bytes"},{"bytes":"30"}]},{"prim":"SOME"},{"prim":"PUSH","args":[{"prim":"string"},{"string":"decimals"}]},{"prim":"UPDATE"},{"prim":"DIG","args":[{"int":"6"}]},{"prim":"SOME"},{"prim":"PUSH","args":[{"prim":"string"},{"string":"symbol"}]},{"prim":"UPDATE"},{"prim":"DUP","args":[{"int":"7"}]},{"prim":"SOME"},{"prim":"PUSH","args":[{"prim":"string"},{"string":"thumbnailUri"}]},{"prim":"UPDATE"},{"prim":"DUP","args":[{"int":"7"}]},{"prim":"SOME"},{"prim":"PUSH","args":[{"prim":"string"},{"string":"displayUri"}]},{"prim":"UPDATE"},{"prim":"DIG","args":[{"int":"6"}]},{"prim":"SOME"},{"prim":"PUSH","args":[{"prim":"string"},{"string":"artifactUri"}]},{"prim":"UPDATE"},{"prim":"PUSH","args":[{"prim":"bytes"},{"bytes":"5b22545a49502d3132225d"}]},{"prim":"SOME"},{"prim":"PUSH","args":[{"prim":"string"},{"string":"interfaces"}]},{"prim":"UPDATE"},{"prim":"DIG","args":[{"int":"5"}]},{"prim":"SOME"},{"prim":"PUSH","args":[{"prim":"string"},{"string":"description"}]},{"prim":"UPDATE"},{"prim":"DIG","args":[{"int":"4"}]},{"prim":"SOME"},{"prim":"PUSH","args":[{"prim":"string"},{"string":"name"}]},{"prim":"UPDATE"},{"prim":"DUP","args":[{"int":"4"}]},{"prim":"PAIR"},{"prim":"DIG","args":[{"int":"3"}]},{"prim":"SWAP"},{"prim":"SOME"},{"prim":"SWAP"},{"prim":"UPDATE"},{"prim":"UPDATE","args":[{"int":"9"}]},{"prim":"EMPTY_BIG_MAP","args":[{"prim":"pair","args":[{"prim":"address"},{"prim":"address"}]},{"prim":"set","args":[{"prim":"nat"}]}]},{"prim":"UPDATE","args":[{"int":"10"}]},{"prim":"NIL","args":[{"prim":"operation"}]},{"prim":"PAIR"}]]}]]}],[{"prim":"IF_LEFT","args":[[{"prim":"DIG","args":[{"int":"2"}]},{"prim":"DIG","args":[{"int":"3"}]},{"prim":"DIG","args":[{"int":"4"}]},{"prim":"DIG","args":[{"int":"6"}]},{"prim":"DROP","args":[{"int":"4"}]},{"prim":"DUP","args":[{"int":"2"}]},{"prim":"GET","args":[{"int":"7"}]},{"prim":"DUP","args":[{"int":"3"}]},{"prim":"GET","args":[{"int":"9"}]},{"prim":"DUP","args":[{"int":"4"}]},{"prim":"GET","args":[{"int":"10"}]},{"prim":"DUP","args":[{"int":"5"}]},{"prim":"GET","args":[{"int":"5"}]},{"prim":"PAIR","args":[{"int":"4"}]},{"prim":"DUP"},{"prim":"GET","args":[{"int":"3"}]},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"SWAP"},{"prim":"LAMBDA","args":[{"prim":"pair","args":[{"prim":"pair","args":[{"prim":"lambda","args":[{"prim":"pair","args":[{"prim":"big_map","args":[{"prim":"pair","args":[{"prim":"address"},{"prim":"address"}]},{"prim":"set","args":[{"prim":"nat"}]}]},{"prim":"address"},{"prim":"address"},{"prim":"nat"}]},{"prim":"big_map","args":[{"prim":"pair","args":[{"prim":"address"},{"prim":"address"}]},{"prim":"set","args":[{"prim":"nat"}]}]}]},{"prim":"lambda","args":[{"prim":"address"},{"prim":"unit"}]}]},{"prim":"pair","args":[{"prim":"big_map","args":[{"prim":"pair","args":[{"prim":"address"},{"prim":"address"}]},{"prim":"set","args":[{"prim":"nat"}]}]},{"prim":"or","args":[{"prim":"pair","args":[{"prim":"address"},{"prim":"address"},{"prim":"nat"}]},{"prim":"pair","args":[{"prim":"address"},{"prim":"address"},{"prim":"nat"}]}]}]}]},{"prim":"big_map","args":[{"prim":"pair","args":[{"prim":"address"},{"prim":"address"}]},{"prim":"set","args":[{"prim":"nat"}]}]},[{"prim":"UNPAIR"},{"prim":"UNPAIR"},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"UNPAIR"},{"prim":"SWAP"},{"prim":"IF_LEFT","args":[[{"prim":"DIG","args":[{"int":"3"}]},{"prim":"DROP"},{"prim":"DUP"},{"prim":"GET","args":[{"int":"4"}]},{"prim":"DUP","args":[{"int":"2"}]},{"prim":"GET","args":[{"int":"3"}]},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"CAR"},{"prim":"DIG","args":[{"int":"3"}]},{"prim":"PAIR","args":[{"int":"4"}]},{"prim":"EXEC"}],[{"prim":"DIG","args":[{"int":"2"}]},{"prim":"DROP"},{"prim":"DUP"},{"prim":"GET","args":[{"int":"3"}]},{"prim":"DUP","args":[{"int":"2"}]},{"prim":"CAR"},{"prim":"DUP","args":[{"int":"2"}]},{"prim":"DUP","args":[{"int":"2"}]},{"prim":"COMPARE"},{"prim":"EQ"},{"prim":"IF","args":[[{"prim":"SWAP"},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"DIG","args":[{"int":"4"}]},{"prim":"DROP","args":[{"int":"4"}]}],[{"prim":"DUP"},{"prim":"DIG","args":[{"int":"5"}]},{"prim":"SWAP"},{"prim":"EXEC"},{"prim":"DROP"},{"prim":"DUP","args":[{"int":"4"}]},{"prim":"DIG","args":[{"int":"4"}]},{"prim":"DUP","args":[{"int":"4"}]},{"prim":"DUP","args":[{"int":"4"}]},{"prim":"PAIR"},{"prim":"GET"},{"prim":"IF_NONE","args":[[{"prim":"DIG","args":[{"int":"3"}]},{"prim":"DROP"},{"prim":"NONE","args":[{"prim":"set","args":[{"prim":"nat"}]}]}],[{"prim":"DIG","args":[{"int":"4"}]},{"prim":"GET","args":[{"int":"4"}]},{"prim":"PUSH","args":[{"prim":"bool"},{"prim":"False"}]},{"prim":"SWAP"},{"prim":"UPDATE"},{"prim":"PUSH","args":[{"prim":"nat"},{"int":"0"}]},{"prim":"DUP","args":[{"int":"2"}]},{"prim":"SIZE"},{"prim":"COMPARE"},{"prim":"EQ"},{"prim":"IF","args":[[{"prim":"DROP"},{"prim":"NONE","args":[{"prim":"set","args":[{"prim":"nat"}]}]}],[{"prim":"SOME"}]]}]]},{"prim":"DIG","args":[{"int":"3"}]},{"prim":"DIG","args":[{"int":"3"}]},{"prim":"PAIR"},{"prim":"UPDATE"}]]}]]}]]},{"prim":"DUP","args":[{"int":"7"}]},{"prim":"DUP","args":[{"int":"7"}]},{"prim":"PAIR"},{"prim":"APPLY"},{"prim":"DIG","args":[{"int":"5"}]},{"prim":"DIG","args":[{"int":"6"}]},{"prim":"DROP","args":[{"int":"2"}]},{"prim":"SWAP"},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"ITER","args":[[{"prim":"SWAP"},{"prim":"PAIR"},{"prim":"DUP","args":[{"int":"2"}]},{"prim":"SWAP"},{"prim":"EXEC"}]]},{"prim":"SWAP"},{"prim":"DROP"},{"prim":"UPDATE","args":[{"int":"3"}]},{"prim":"NIL","args":[{"prim":"operation"}]},{"prim":"PAIR"},{"prim":"SWAP"},{"prim":"DUP","args":[{"int":"2"}]},{"prim":"CDR"},{"prim":"CAR"},{"prim":"UPDATE","args":[{"int":"5"}]},{"prim":"DUP","args":[{"int":"2"}]},{"prim":"CDR"},{"prim":"GET","args":[{"int":"6"}]},{"prim":"UPDATE","args":[{"int":"7"}]},{"prim":"DUP","args":[{"int":"2"}]},{"prim":"CDR"},{"prim":"GET","args":[{"int":"5"}]},{"prim":"UPDATE","args":[{"int":"9"}]},{"prim":"DUP","args":[{"int":"2"}]},{"prim":"CDR"},{"prim":"GET","args":[{"int":"3"}]},{"prim":"UPDATE","args":[{"int":"10"}]},{"prim":"SWAP"},{"prim":"CAR"}],[{"prim":"DIG","args":[{"int":"5"}]},{"prim":"DIG","args":[{"int":"7"}]},{"prim":"DROP","args":[{"int":"2"}]},{"prim":"IF_LEFT","args":[[{"prim":"DIG","args":[{"int":"2"}]},{"prim":"DIG","args":[{"int":"3"}]},{"prim":"DROP","args":[{"int":"2"}]},{"prim":"DUP","args":[{"int":"2"}]},{"prim":"GET","args":[{"int":"7"}]},{"prim":"DUP","args":[{"int":"3"}]},{"prim":"GET","args":[{"int":"9"}]},{"prim":"DUP","args":[{"int":"4"}]},{"prim":"GET","args":[{"int":"10"}]},{"prim":"DUP","args":[{"int":"5"}]},{"prim":"GET","args":[{"int":"5"}]},{"prim":"PAIR","args":[{"int":"4"}]},{"prim":"SWAP"},{"prim":"UNPAIR"},{"prim":"MAP","args":[[{"prim":"DUP"},{"prim":"UNPAIR"},{"prim":"DUP","args":[{"int":"2"}]},{"prim":"DUP","args":[{"int":"6"}]},{"prim":"GET","args":[{"int":"5"}]},{"prim":"PAIR"},{"prim":"DUP","args":[{"int":"9"}]},{"prim":"SWAP"},{"prim":"EXEC"},{"prim":"DROP"},{"prim":"DUP","args":[{"int":"5"}]},{"prim":"CAR"},{"prim":"PAIR","args":[{"int":"3"}]},{"prim":"DUP","args":[{"int":"6"}]},{"prim":"SWAP"},{"prim":"EXEC"},{"prim":"SWAP"},{"prim":"PAIR"}]]},{"prim":"DIG","args":[{"int":"4"}]},{"prim":"DIG","args":[{"int":"5"}]},{"prim":"DROP","args":[{"int":"2"}]},{"prim":"SWAP"},{"prim":"PUSH","args":[{"prim":"mutez"},{"int":"0"}]},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"TRANSFER_TOKENS"},{"prim":"SWAP"},{"prim":"NIL","args":[{"prim":"operation"}]},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"CONS"},{"prim":"PAIR"},{"prim":"SWAP"},{"prim":"DUP","args":[{"int":"2"}]},{"prim":"CDR"},{"prim":"CAR"},{"prim":"UPDATE","args":[{"int":"5"}]},{"prim":"DUP","args":[{"int":"2"}]},{"prim":"CDR"},{"prim":"GET","args":[{"int":"6"}]},{"prim":"UPDATE","args":[{"int":"7"}]},{"prim":"DUP","args":[{"int":"2"}]},{"prim":"CDR"},{"prim":"GET","args":[{"int":"5"}]},{"prim":"UPDATE","args":[{"int":"9"}]},{"prim":"DUP","args":[{"int":"2"}]},{"prim":"CDR"},{"prim":"GET","args":[{"int":"3"}]},{"prim":"UPDATE","args":[{"int":"10"}]},{"prim":"SWAP"},{"prim":"CAR"}],[{"prim":"DIG","args":[{"int":"4"}]},{"prim":"DROP"},{"prim":"DUP","args":[{"int":"2"}]},{"prim":"GET","args":[{"int":"7"}]},{"prim":"DUP","args":[{"int":"3"}]},{"prim":"GET","args":[{"int":"9"}]},{"prim":"DUP","args":[{"int":"4"}]},{"prim":"GET","args":[{"int":"10"}]},{"prim":"DUP","args":[{"int":"5"}]},{"prim":"GET","args":[{"int":"5"}]},{"prim":"PAIR","args":[{"int":"4"}]},{"prim":"DUP"},{"prim":"CAR"},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"ITER","args":[[{"prim":"UNPAIR"},{"prim":"DUG","args":[{"int":"2"}]},{"prim":"ITER","args":[[{"prim":"UNPAIR","args":[{"int":"3"}]},{"prim":"DUP","args":[{"int":"2"}]},{"prim":"DUP","args":[{"int":"7"}]},{"prim":"GET","args":[{"int":"5"}]},{"prim":"PAIR"},{"prim":"DUP","args":[{"int":"11"}]},{"prim":"SWAP"},{"prim":"EXEC"},{"prim":"DROP"},{"prim":"SENDER"},{"prim":"DUP","args":[{"int":"6"}]},{"prim":"DUP","args":[{"int":"2"}]},{"prim":"COMPARE"},{"prim":"NEQ"},{"prim":"IF","args":[[{"prim":"DUP","args":[{"int":"7"}]},{"prim":"GET","args":[{"int":"3"}]},{"prim":"SWAP"},{"prim":"DUP","args":[{"int":"7"}]},{"prim":"PAIR"},{"prim":"GET"},{"prim":"IF_NONE","args":[[{"prim":"EMPTY_SET","args":[{"prim":"nat"}]}],[]]},{"prim":"DUP","args":[{"int":"3"}]},{"prim":"MEM"},{"prim":"NOT"},{"prim":"IF","args":[[{"prim":"PUSH","args":[{"prim":"string"},{"string":"FA2_NOT_OPERATOR"}]},{"prim":"FAILWITH"}],[]]}],[{"prim":"DROP"}]]},{"prim":"DUP","args":[{"int":"3"}]},{"prim":"DUP","args":[{"int":"3"}]},{"prim":"DUP","args":[{"int":"7"}]},{"prim":"DIG","args":[{"int":"6"}]},{"prim":"PAIR","args":[{"int":"4"}]},{"prim":"DUP","args":[{"int":"9"}]},{"prim":"SWAP"},{"prim":"EXEC"},{"prim":"PAIR","args":[{"int":"4"}]},{"prim":"DUP","args":[{"int":"5"}]},{"prim":"SWAP"},{"prim":"EXEC"}]]},{"prim":"SWAP"},{"prim":"DROP"}]]},{"prim":"DIG","args":[{"int":"3"}]},{"prim":"DIG","args":[{"int":"4"}]},{"prim":"DIG","args":[{"int":"5"}]},{"prim":"DROP","args":[{"int":"3"}]},{"prim":"UPDATE","args":[{"int":"1"}]},{"prim":"NIL","args":[{"prim":"operation"}]},{"prim":"PAIR"},{"prim":"SWAP"},{"prim":"DUP","args":[{"int":"2"}]},{"prim":"CDR"},{"prim":"CAR"},{"prim":"UPDATE","args":[{"int":"5"}]},{"prim":"DUP","args":[{"int":"2"}]},{"prim":"CDR"},{"prim":"GET","args":[{"int":"6"}]},{"prim":"UPDATE","args":[{"int":"7"}]},{"prim":"DUP","args":[{"int":"2"}]},{"prim":"CDR"},{"prim":"GET","args":[{"int":"5"}]},{"prim":"UPDATE","args":[{"int":"9"}]},{"prim":"DUP","args":[{"int":"2"}]},{"prim":"CDR"},{"prim":"GET","args":[{"int":"3"}]},{"prim":"UPDATE","args":[{"int":"10"}]},{"prim":"SWAP"},{"prim":"CAR"}]]}]]},{"prim":"PAIR"}]]}]]}]]}]]}]`)
};
