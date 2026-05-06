# 치킨 댄스를 추고 있는 곰곰이를 본 임스는 치킨을 먹고 싶어졌다. 
# 임스는 치킨 2개나 맥주 1개와 같이 먹어야 한다.
# 또한, 치킨집에 있는 치킨의 개수보다 치킨을 많이 시켜먹을 수는 없다.
# 치킨집에 있는 치킨의 개수와 임스의 집에 있는 콜라, 맥주의 개수가 주어졌을 때, 임스가 시켜먹을 수 있는 치킨의 총 개수를 출력하시오.
Chicken=int(input())
coke,beer=map(int,input().split())
coke=coke//2
if Chicken-(coke-beer)>0:
    print((coke+beer),"마리를 먹을수 있습니다.")
else:
    print(Chicken,"마리를 먹을수 있습니다.")
