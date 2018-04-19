/**
 * Created by dapeng.zhou on 2016/7/6.
 */
public class Test {
    @Override
    public String toString() {
        return super.toString();
    }

    public static void main(String[] args) {
        StringBuilder sb = new StringBuilder();
        for (int i=0;i<=1060;i++) {
            sb.append(i).append(",");
        }
        System.out.println(sb);
    }
}
