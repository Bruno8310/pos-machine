### printReceipt
- Plan: 10min
- Do: 5min
- Check: 设计子方法的执行流程和逻辑多花费5min，实际15min
- Action: 自定义商品数据的信息，用来和实际POS机产生交易数据的比对

### decodeBarcodes
- Plan:10min
- Do:10min
- Check:如何统计一次交易记录中商品码出现的次数，即一次交易的商品数量统计，在思考这个问题时过于纠结程序格式化输出的示例，纠结了10min
- Action:主要统计一次交易中各个商品的数量，以此计算单种商品的金额和总金额，返回一个商品数组

### calculateItem
- Plan: 5min
- Do:7min
- Check:在计算商品的价格和一次交易的总金额时，考虑任务分解，分解成两个函数执行相关逻辑操作，花费2min
- Action: 分别计算单个商品的金额和一次交易的总金额

### function subtotalPrcie

- Plan:5min
- Do:5min
- Check:按照计划的的时间刚好完成
- Action: 计算单个商品的金额，通过遍历已经分解的商品数组，从而很快求解出单个商品的金额

### totalPrice
- Plan: 3min
- Do:3min
- Check: 按照计划的时间正常完成
- Action: 计算一次交易的金额，遍历累加即可完成

### formatPrintReceipt
- Plan:9min 
- Do:13min
- Check:结合需求所给的示例输出，考虑如何正确的在控制台输出结果，花费4min
- Action:与输出做对比，整合一个商品对象，包含相关属性和属性值，格式化在控制台输出
