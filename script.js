import java.util.Scanner;

public class RealEstateInvestorChecklist {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        boolean[] checklist = new boolean[22]; // 22 items in the checklist
        boolean allCompleted = false;

        System.out.println("Real Estate Investor Checklist");

        while (!allCompleted) {
            System.out.println("\nSelect an action:");
            System.out.println("1. Mark checklist item as completed");
            System.out.println("2. View checklist");
            System.out.println("3. Complete checklist");

            int choice = scanner.nextInt();
            scanner.nextLine(); // Consume newline character

            switch (choice) {
                case 1:
                    markItemAsCompleted(checklist, scanner);
                    break;
                case 2:
                    displayChecklist(checklist);
                    break;
                case 3:
                    allCompleted = completeChecklist(checklist);
                    break;
                default:
                    System.out.println("Invalid choice. Please enter a number between 1 and 3.");
            }
        }

        System.out.println("Congratulations! You have completed your real estate investor checklist.");
        scanner.close();
    }

    public static void markItemAsCompleted(boolean[] checklist, Scanner scanner) {
        System.out.println("Enter the checklist item number you want to mark as completed:");
        int itemNumber = scanner.nextInt();
        scanner.nextLine(); // Consume newline character

        if (itemNumber < 1 || itemNumber > checklist.length) {
            System.out.println("Invalid item number.");
        } else {
            checklist[itemNumber - 1] = true; // Arrays are zero-indexed
            System.out.println("Checklist item " + itemNumber + " marked as completed.");
        }
    }

    public static void displayChecklist(boolean[] checklist) {
        System.out.println("Real Estate Investor Checklist:");

        System.out.println("\nFinances (Important):");
        System.out.println("1. Calculate budget");
        System.out.println("2. Review financing options");
        System.out.println("3. Set up financing");

        System.out.println("\nProperty Purchasing Transaction (Important):");
        System.out.println("4. Search for properties");
        System.out.println("5. Conduct property inspections");
        System.out.println("6. Make an offer");
        System.out.println("7. Finalize financing");
        System.out.println("8. Complete legal paperwork");

        System.out.println("\nRenovation (Important):");
        System.out.println("9. Plan renovation budget");
        System.out.println("10. Hire contractors");
        System.out.println("11. Monitor renovation progress");

        System.out.println("\nRefinancing (Important):");
        System.out.println("12. Evaluate refinance options");
        System.out.println("13. Apply for refinance");

        System.out.println("\nListing (Important):");
        System.out.println("14. Prepare property for listing");
        System.out.println("15. List property");

        System.out.println("\nOther Checklist Items:");

        System.out.println("\nBook:");
        System.out.println("16. Read Chapter 1: Purpose of the Book");
        System.out.println("17. Read Chapter 2: Defining Your Investment Criteria");

        System.out.println("\nProperty Management:");
        System.out.println("18. Set up property management");
        System.out.println("19. Screen tenants");

        System.out.println("\nLegal Considerations:");
        System.out.println("20. Review contracts");
        System.out.println("21. Consult with legal advisor");

        System.out.println("\nEducation (Important):");
        System.out.println("22. Continue real estate education");

        System.out.println("\nCompleted Checklist Items:");
        for (int i = 0; i < checklist.length; i++) {
            if (checklist[i]) {
                System.out.println((i + 1) + ". Completed");
            }
        }
    }

    public static boolean completeChecklist(boolean[] checklist) {
        for (boolean item : checklist) {
            if (!item) {
                System.out.println("Please complete all checklist items before completing the checklist.");
                return false;
            }
        }
        return true;
    }
}
