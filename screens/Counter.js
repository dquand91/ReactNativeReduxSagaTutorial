import React, {Component} from 'react';
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

const {height, width} = Dimensions.get('window');

class Counter extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.counterTitle}>Counter</Text>
        {/*Action từ View tới Saga sẽ kèm theo value là 3 để cộng/trừ vô số hiển thị  */}
        {/*Click dấu + sẽ sau 4 giây giá trị mới tăng lên, để giả lập giống request api*/}
        <View style={styles.counterContainerCol}>
          <Text style={styles.counterTitle}>View to Saga</Text>
          <View style={styles.counterContainer}>
            <TouchableOpacity
              onPress={() => this.props.reduxIncreaseCounterToSaga(3)}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>

            <Text style={styles.counterText}>{this.props.counterInView}</Text>

            <TouchableOpacity
              onPress={() => this.props.reduxDecreaseCounterToSaga(3)}>
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.counterTitle}>*************</Text>
        {/*Action từ View thẳng tới Reducer sẽ kèm theo value là 5 để cộng/trừ vô số hiển thị  */}
        <View style={styles.counterContainerCol}>
          <Text style={styles.counterTitle}>View to Reducer</Text>
          <View style={styles.counterContainer}>
            <TouchableOpacity
              onPress={() => this.props.reduxIncreaseCounterToReducer(5)}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
            <Text style={styles.counterText}>    </Text>
            <TouchableOpacity
              onPress={() => this.props.reduxDecreaseCounterToReducer(5)}>
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterContainerCol: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterTitle: {
    fontFamily: 'System',
    fontSize: 32,
    fontWeight: '700',
    color: '#000',
  },
  counterText: {
    fontFamily: 'System',
    fontSize: 36,
    fontWeight: '400',
    color: '#000',
  },
  buttonText: {
    fontFamily: 'System',
    fontSize: 50,
    fontWeight: '300',
    color: '#007AFF',
    marginLeft: 40,
    marginRight: 40,
  },
});

// Để nhận state thay đổi từ Store -> View
const mapStateToProps = (state) => {
  console.log('State:');
  console.log(state);

  return {
    counterInView: state.counter.counter123,
  };
};

// Ở đây sẽ có 4 cái action
// 2 từ View => Saga
// 2 từ View => Reducer (Không qua Saga)
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      reduxIncreaseCounterToSaga,
      reduxDecreaseCounterToSaga,
      reduxIncreaseCounterToReducer,
      reduxDecreaseCounterToReducer,
    },
    dispatch,
  );

// Mặc định inputNum sẽ là 1
const reduxIncreaseCounterToSaga = (inputNum = 1) => {
  return {
    type: 'INCREASE_COUNTER_FROM_VIEW_TO_SAGA',
    value: inputNum,
  };
};

const reduxDecreaseCounterToSaga = (inputNum = 1) => {
  return {
    type: 'DECREASE_COUNTER_FROM_VIEW_TO_SAGA',
    value: inputNum,
  };
};

const reduxIncreaseCounterToReducer = (inputNum = 1) => {
  return {
    type: 'INCREASE_COUNTER_FROM_VIEW_TO_REDUCER',
    value: inputNum,
  };
};

const reduxDecreaseCounterToReducer = (inputNum = 1) => {
  return {
    type: 'DECREASE_COUNTER_FROM_VIEW_TO_REDUCER',
    value: inputNum,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
