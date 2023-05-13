input_len = input("How many objects?: ")
input_values = input("Values: ")
input_weight = input("Weight: ")

n = int(input_len)
knapsack_weight = float(input("Knapsack weight: "))
values = input_values.split(' ')
weight = input_weight.split(' ')
list_values_weight_rap = list()
for i in range(n):
    values[i] = float(values[i])
    weight[i] = float(weight[i])
    list_values_weight_rap.append((values[i], weight[i], values[i] / weight[i]))

list_values_weight_rap.sort(key=lambda tupl: tupl[2], reverse=True)
total_value = 0
for i in range(n):
    if list_values_weight_rap[i][1] <= knapsack_weight:
        knapsack_weight -= list_values_weight_rap[i][1]
        total_value += list_values_weight_rap[i][0]
        print("Object number {} with value {} and weight {} was added".
              format(i+1, list_values_weight_rap[i][0], list_values_weight_rap[i][1]))
    else:
        print("Object number {} with value {} and weight {} was added".
              format(i+1, list_values_weight_rap[i][0], knapsack_weight))
        total_value += list_values_weight_rap[i][2] * knapsack_weight
        knapsack_weight = 0
        break
if knapsack_weight > 0:
    print("Knapsack could not be filled entirely!")
print("Value accumulated in the knapsack: {}".format(total_value))
